import { Navigate, useNavigate, useRoutes  } from "react-router-dom"
import routes from "./routes"
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { Loader } from "./components/Loader"
import { useState , useEffect } from "react"





const App = () => {
  const { user } = useSelector(state => state.auth)
  const showRoutes = useRoutes(routes)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      if(loading){
        setLoading(false)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Toaster position="top-right" />
      {loading ? <Loader /> :  showRoutes}
    </>
  )
}

export default App
