import { useEffect } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./routes"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { Loader } from "./components/Loader"
import { icons } from "./assets/icons"
import { showModal } from "./store/features/modal/settingsModalSlice"




const App = () => {
  const { user } = useSelector(state => state.auth)
  const showRoutes = useRoutes(routes)
  const dispatch = useDispatch()

  if (user === null) {
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
