import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { icons } from "../assets/icons"
import { images } from "../assets/images"
import { logout } from "../firebase"
import { useWindowSize } from "../hooks/useWindowSize"

const sidebarLinks = [
    { name: "Home", icon: <icons.home />, link: "/" },
    { name: "Search", icon: <icons.search />, link: "/search" },
    { name: "Explore", icon: <icons.explore />, hidden: true, link: "/explore" },
    { name: "Reels", icon: <icons.reels />, hidden: true, link: "/reels" },
    { name: "Messages", icon: <icons.direct />, hidden: true, link: "/messages" },
    { name: "Notifications", icon: <icons.heart />, left: true, link: "/notifications" },
    { name: "Create", icon: <icons.create />, link: "/create" },
]

const moreLinks = [
    { name: "Settings", icon: <icons.settings /> },
    { name: "Saved", icon: <icons.save /> },
    { name: "Switch appearance", icon: <icons.moon /> },
    { name: "Your activity", icon: <icons.timer /> },
    { name: "Report a problem", icon: <icons.alert /> },
    { name: "Switch accounts" ,  space: true },
    
]

export const Sidebar = () => {
    const { width } = useWindowSize()
    const [moreScreen, setMoreScreen] = useState(false)
    const moreRef = useRef()

    useEffect(() => {
        window.addEventListener("click" , (e) => {
            console.log(moreRef)
            if(e.target.classList.contains("moreBtn")){
                setMoreScreen(true)
            }
            if(!e.target.classList.contains("moreLinks") && !e.target.classList.contains("moreBtn")){
                setMoreScreen(false)
            }
        })  

        return () => removeEventListener("click" , window)
    } , [])


    return (
        <aside className="fixed w-full border-t md:static bottom-0 left-0 md:w-20 xl:w-[245px] 2xl:w-[336px] duration-300 md:flex flex-col justify-between bg-white md:border-r border-gray-300 md:py-7 px-4">
            <div className="flex md:flex-col md:gap-y-6">
                <div className="xl:pl-2 hidden md:block">
                    <a href="#" className="flex xl:inline-block items-center justify-center rounded-full hover:bg-gray-50 py-2 xl:py-0 group">
                        {width > 1280 ? <img className="w-28" src={images.ilogo} alt="logo" /> : <icons.instagramIco className="text-2xl group-hover:scale-125 duration-300" />}
                    </a>
                </div>
                <ul className="flex w-full justify-between md:justify-start md:flex-col gap-1">
                    {sidebarLinks.map((link, index) => (
                        <li key={index} className={`h-14 flex items-center ${link.hidden ? "hidden md:inline-block" : ""} ${link.left ? "order-1 md:order-none" : ""}`}><a className={`flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl group ${window.location.pathname === link.link ? "active" : ""}`} href={`${link.link}`} ><span className="text-2xl group-hover:scale-125 duration-300">{link?.icon}</span><span className="hidden xl:inline-block">{link.name}</span></a></li>
                    ))}
                    <li className="h-14 flex items-center order-1 md:order-none" ><a className="flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl" href="#" ><span className="w-7 h-7 rounded-full bg-gray-400"></span><span className="hidden xl:inline-block">Profile</span></a></li>
                </ul>
            </div>

            <div className="h-full flex flex-col justify-end">
                <li className="hidden h-14 md:flex items-center"><button type="button" className="moreBtn group" onClick={() => setMoreScreen(prev => !prev)} ><span className="2xl group-hover:scale-125 duration-300 pointer-events-none"><icons.menu className="pointer-events-none"/></span><span className="hidden xl:inline-block pointer-events-none">More</span></button></li>
            </div>

            <div className={`w-[220px] duration-300 absolute shadow-lg bottom-20 bg-gray-200 z-10 rounded-sm ${moreScreen ? "scale-100  left-6" : "-left-20 scale-0"}`} ref={moreRef}>
                <ul className="moreLinks">
                    {moreLinks.map((link, index) => (
                        <li key={index} className={`h-11 flex items-center justify-between ${link.space ? "mt-[3px]" : ""}`}  ><a className="py-[9px] border-b border-gray-200  flex  items-center justify-between w-full px-3 duration-300 bg-white hover:bg-gray-100 text-[16px]" href="#" ><span className="hidden xl:inline-block">{link.name}</span>{link?.icon && <span className="text-2xl">{link?.icon}</span>}</a></li>
                    ))}
                      <li className={`h-11 flex items-center justify-between`}  ><button onClick={async() =>await logout()} type="button" className="py-[9px] border-b border-gray-200  flex  items-center justify-between w-full px-3 duration-300 bg-white hover:bg-gray-100 text-[16px]" ><span className="hidden xl:inline-block">Log out</span></button></li>
                </ul>
            </div>

        </aside>
    )
}
