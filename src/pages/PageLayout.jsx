import { Suspense , useEffect } from "react"
import { Outlet } from "react-router-dom"
import { icons } from "../assets/icons"
import { Sidebar } from "../components/sidebar/Sidebar"


const PageLayout = () => {
    useEffect(() => {
        if (localStorage.getItem("darkMode")) {
            document.documentElement.classList.add("dark")
        }
    }, [])
    return (
        <div className="flex h-full relative dark:bg-black">
            <Sidebar />
            <Suspense >
                <Outlet />
            </Suspense>
        </div>
    )
}

export default PageLayout