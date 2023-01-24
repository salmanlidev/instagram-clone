import { Navigate, useNavigate, useRoutes } from "react-router-dom"
import routes from "./routes"
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { Loader } from "./components/Loader"
import { useState, useEffect } from "react"





const App = () => {
  const { user } = useSelector(state => state.auth)
  const showRoutes = useRoutes(routes)
  

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
