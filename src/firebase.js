import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged ,signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore , doc , setDoc } from "firebase/firestore"
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


onAuthStateChanged(auth , user => {
    if(user){
        userHandle({ 
            id : user.uid ,
            email : user.email ,
         })
    }
    else{
        userHandle(false)
    }
})
 
export const login = async (email , password) => {
    try{
        const response = await signInWithEmailAndPassword(auth , email , password)
        toast("Sign in Succesfuly")
        return true
    }
    catch(err) {
        toast.error(err.code)
        return false
    }
}

export const register = async ({email , password , full_name , username}) => {
    try{
        const response = await createUserWithEmailAndPassword(auth , email , password)
        toast("Created Account Succesfuly !")

        if(response.user){
            await setDoc(doc(db , "users" , response.user.uid) ,{
                fullName : full_name , 
                username : username ,
                email : email , 
                password : password ,
                followers : [] ,
                following : [] ,
                notifications : []
            })

            await updateProfile(auth.currentUser , {
                displayName : full_name
            })
        }

       

        return true
    }
    catch(err) {
        
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