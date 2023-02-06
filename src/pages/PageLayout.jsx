import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { icons } from "../assets/icons"
import { Sidebar } from "../components/sidebar/Sidebar"


const PageLayout = () => {
    return (
        <div className="flex h-full relative">
            <Sidebar />
            <Suspense >
                <Outlet />
            </Suspense>
        </div>
    )
}

export default PageLayout