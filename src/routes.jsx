import Home from "./pages/home"
import Login from "./pages/auth/Login"
import AuthLayout from "./pages/auth"
import PrivateRoute from "./components/PrivateRoute"
import PageLayout from "./pages/PageLayout"
import Register from "./pages/auth/Register"

const routes = [
    {
        path : "/" ,
        element : <PageLayout /> ,
        children : [
            {
                index : true , 
                element : <Home />
            }
        ],
        auth : true
    } ,
    {
        path : "/auth" ,
        element : <AuthLayout />, 
        children : [
            {
                path : "login" ,
                element : <Login />
            } ,
            {
                path : "register" ,
                element : <Register />
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute>{route?.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes)