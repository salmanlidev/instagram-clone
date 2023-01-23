import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full flex items-center justify-center py-52 flex-col gap-10 bg-gray-50">{<Outlet />}</div>
  )
}

export default AuthLayout