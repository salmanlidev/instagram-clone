import {  useNavigate, useRoutes } from "react-router-dom"
import routes from "./routes"
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { Loader } from "./components/Loader"





const App = () => {
  const { user } = useSelector(state => state.auth)
  const showRoutes = useRoutes(routes)

  const navigate = useNavigate()
  

  if(user === null ){
    return <Loader />
  }

  return (
    <>
      <Toaster position="top-right" />
      {showRoutes}
    </>
  )
}

export default App
