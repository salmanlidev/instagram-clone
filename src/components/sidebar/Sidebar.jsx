import { useRef, useEffect, useState } from "react"
import { icons } from "../../assets/icons"
import { images } from "../../assets/images"
import { useWindowSize } from "../../hooks/useWindowSize"
import { MoreLink } from "./MoreLink"
import { SearchSide } from "./SearchSide"

const sidebarLinks = [
    { name: "Home", icon: <icons.home />, link: "/" },
    { name: "Search", icon: <icons.search />, button: true },
    { name: "Explore", icon: <icons.explore />, hidden: true, link: "/explore" },
    { name: "Reels", icon: <icons.reels />, hidden: true, link: "/reels" },
    { name: "Messages", icon: <icons.direct />, hidden: true, link: "/messages" },
    { name: "Notifications", icon: <icons.heart />, left: true, link: "/notifications" },
    { name: "Create", icon: <icons.create />, link: "/create" },
]


export const Sidebar = () => {
    const { width } = useWindowSize()
    const [moreScreen, setMoreScreen] = useState(false)
    const moreRef = useRef()
    const [searchSide, setSearchSide] = useState(false)
   

    useEffect(() => {
        const checkOutside = e => {
            if (moreScreen && moreRef.current && !moreRef.current.contains(e.target)) {
                setMoreScreen(false)
            }
        }


        document.addEventListener("mousedown", checkOutside)

        return () => document.removeEventListener("mousedown", checkOutside)
    })

    return (
        <div className="flex">
            <aside className={`fixed w-full border-t md:static bottom-0 left-0 ${searchSide ? "w-20" : "md:w-20 xl:w-[245px] 2xl:w-[336px]"}  duration-200 md:flex flex-col justify-between bg-white md:border-r border-gray-300 md:py-7 px-4`}>
                <div className="flex md:flex-col md:gap-y-6">
                    {searchSide ? <div className="flex items-center justify-center">
                        <a href="#" className="flex xl:inline-block items-center justify-center rounded-full hover:bg-gray-50 py-2 xl:py-2 group">
                            <icons.instagramIco className="text-3xl group-hover:scale-125 duration-300" />
                        </a>
                    </div> : <div className="xl:pl-2 hidden md:block">
                        <a href="#" className="flex xl:inline-block items-center justify-center rounded-full hover:bg-gray-50 py-2 xl:py-0 group">
                            {width > 1280 ? <img className="w-28" src={images.ilogo} alt="logo" /> : <icons.instagramIco className="text-2xl group-hover:scale-125 duration-300" />}
                        </a>
                    </div>}
                    <ul className="flex w-full justify-between md:justify-start md:flex-col gap-1">
                        {sidebarLinks.map((link, index) => (
                            <li key={index} className={`h-14 flex items-center ${link.hidden ? "hidden md:inline-block" : ""} ${link.left ? "order-1 md:order-none" : ""}`}>
                                {link?.button ? <button onClick={() => setSearchSide(prev => !prev)} className={`flex items-center  gap-x-3 ${searchSide ? "border border-gray-300 p-2 justify-center" : "p-3"} w-full rounded-full  duration-300 hover:bg-gray-100 text-xl group`}><span className="text-2xl group-hover:scale-125 duration-300">{link?.icon}</span><span className={`hidden xl:inline-block ${searchSide ? "!hidden" : ""}`}>{link.name}</span></button> : <a className={`flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl group ${window.location.pathname === link.link ? "active" : ""}`} href={`${link?.link}`} ><span className="text-2xl group-hover:scale-125 duration-300">{link?.icon}</span><span className={`hidden xl:inline-block ${searchSide ? "!hidden" : ""}`}>{link.name}</span></a>}
                            </li>
                        ))}
                        <li className="h-14 flex items-center order-1 md:order-none" ><a className="flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl" href="#" ><span className="w-7 h-7 rounded-full bg-gray-400"></span><span className={`hidden xl:inline-block ${searchSide ? "!hidden" : ""}`}>Profile</span></a></li>
                    </ul>
                </div>

                <MoreLink moreRef={moreRef} searchSide={searchSide} setMoreScreen={setMoreScreen}  moreScreen={moreScreen} />
                            
            </aside>

            {/*! searchSide */}
            
            <SearchSide searchSide={searchSide} />

        </div>

    )
}
