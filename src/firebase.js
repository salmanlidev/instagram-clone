import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { toast } from "react-hot-toast";
import { userHandle } from "./utils";

const firebaseConfig = {
    apiKey: "AIzaSyBrgxs2Ghj94wqQgMLOJ3-k3lC8CzQ1M7A",
    authDomain: "salmanlidev-instagram-clone.firebaseapp.com",
    projectId: "salmanlidev-instagram-clone",
    storageBucket: "salmanlidev-instagram-clone.appspot.com",
    messagingSenderId: "334566544115",
    appId: "1:334566544115:web:3d60110215886c95049d86",
    measurementId: "G-JN7WSKYH05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)


onAuthStateChanged(auth, async user => {
    if (user) {
        setTimeout(() => {
            const dbUser =  getDoc(doc(db, "users", user.uid))
            .then(d => {
                let data = {
                    uid: user.uid,
                    fullName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    ...d.data()
                }
                userHandle(data)
            })
            .catch(e => toast.error(e.code))
        } , 1000)
       
    }
    else {
        userHandle(false)
    }
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        if (response.user) {
            toast("Sign in Succesfuly")
            return true
        }
    }
    catch (err) {
        toast.error(err.code)
        return false
    }
}


export const getUserInfo = async uname => {
    try{
        const username = await getDoc(doc(db, "usernames", uname))
        if(username.exists()){
            return await getDoc(doc(db , "users" , username.data().user_id ))
        }
        else{
            toast.error("User not found !")
            return false
        }
    }
    catch(err){

    }
}


export const register = async ({ email, password, full_name, username }) => {
    try {
        const docSnap = await getDoc(doc(db, "usernames", username))
        if (docSnap.exists()) {
            toast.error("use diferent username !")
            return false
        }
        else {
            
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response.user) {
                await setDoc(doc(db, "usernames", username), {
                    user_id: response.user.uid,
                    username: username,

                })


                await setDoc(doc(db, "users", response.user.uid), {
                    fullName: full_name,
                    username: username,
                    email: email,
                    password: password,
                    followers: [],
                    following: [],
                    notifications: [] ,
                    profileImg : "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" ,
                    bio :"" ,
                    phoneNumber : "" ,
                    website : "" ,
                    gender : "" ,
                    posts : [] ,
                    saved : [] ,
                    tagged : []
                })

                await updateProfile(auth.currentUser, {
                    displayName: full_name
                })

                toast.success("Created Account Succesfuly !")
                return true
            }
        }
    }
    catch (err) {

        toast.error(err.code)
        return false
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        toast.error(error.code)
    }
}