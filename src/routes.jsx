import Home from "./pages/home"
import Login from "./pages/auth/Login"
import AuthLayout from "./pages/auth"
import PrivateRoute from "./components/PrivateRoute"
import PageLayout from "./pages/PageLayout"
import Register from "./pages/auth/Register"
import Profile from "./pages/profile/profile"
import { Posts } from "./components/profile/Posts"
import { ProfileSaved } from "./components/profile/ProfileSaved"
import { ProfileTagged } from "./components/profile/ProfileTagged"
import Explore from "./pages/explore/explore"
import Message from "./pages/messages/message"
import MessageLayout from "./pages/messages/MessageLayout"




const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:  ':username',
                element: <Profile /> ,
                children : [
                    {
                        index : true ,
                        element : <Posts />
                    } ,
                    {
                        path : "tagged" ,
                        element : <ProfileTagged />
                    } ,
                    {
                        path : "saved" ,
                        element : <ProfileSaved />
                    }

                ]
            },
            {
                path : "/explore" ,
                element : <Explore />
            } ,
            {
                path : "/direct" ,
                element : <MessageLayout />  ,
                children : [
                    {
                        path : "inbox" ,
                        element : <Message />
                    }
                    

                ]
            }
        ],
        auth: true
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route?.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes)