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
      <div className={`${window.location.pathname.includes("auth") ? "hidden" : ""}  border-y border-gray-300 flex md:hidden justify-end p-1`}>
        <button onClick={() => dispatch(showModal())} type="button" ><icons.settings className="text-3xl" /></button>
      </div>
     
      {showRoutes}
    </>
  )
}

export default App
