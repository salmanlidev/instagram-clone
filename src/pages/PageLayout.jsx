import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"

const PageLayout = () => {
    return (
        <div className="flex h-full relative">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default PageLayout