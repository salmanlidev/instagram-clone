import { Outlet } from "react-router-dom"
import { icons } from "../assets/icons"
import { Sidebar } from "../components/sidebar/Sidebar"


const PageLayout = () => {
    return (
        <div className="flex h-full relative">     
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default PageLayout