import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full flex items-center justify-center py-2 flex-col gap-10 bg-gray-50">{<Suspense><Outlet />
      </Suspense>}</div>
  )
}

export default AuthLayout