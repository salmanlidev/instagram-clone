import { Routes , Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"


const App = () => {
  return (
    <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
    </div>
  )
}

export default App
