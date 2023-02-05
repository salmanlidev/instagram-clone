import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { icons } from "../../assets/icons"
import { images } from "../../assets/images"
import { logout } from "../../firebase"
import { useWindowSize } from "../../hooks/useWindowSize"
import { showModal } from "../../store/features/modal/settingsModalSlice"
import { DefaultIcon } from "./DefaultIcon"
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
    const { username, profileImg } = useSelector(state => state.auth.user)
    const { isOpen } = useSelector(state => state.setModal)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        const checkOutside = e => {
            if (moreScreen && moreRef.current && !moreRef.current.contains(e.target)) {
                setMoreScreen(false)
            }
        }


        document.addEventListener("mousedown", checkOutside)

        return () => document.removeEventListener("mousedown", checkOutside)
    })

    const searchBtn = () => {
        if(width < 768){
            navigate("/explore")
        }
        else {
            setSearchSide(prev => !prev)
        }
    }

    return (
        <div className="flex">
            <div className={`${isOpen ? "" : "hidden"} fixed inset-0 shadow-lg z-40 flex items-center justify-center`}>
                <div className="w-[200px] bg-white flex flex-col gap-y-5 items-center justify-center py-4 ">
                    <button onClick={() => dispatch(showModal())} className="text-2xl ">X</button>
                    <button onClick={async () => {
                        await logout()
                        dispatch(showModal())
                    }} className="text-red-700 border border-gray-300 px-2 py-1">Log out</button>
                </div>
            </div>
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
                                {link?.button ? <button onClick={searchBtn} className={`flex items-center gap-x-3 ${searchSide ? "border border-gray-300 p-2 justify-center" : "p-3"} w-full rounded-full  duration-300 hover:bg-gray-100 text-xl group`}><span className="text-3xl md:text-2xl group-hover:scale-125 duration-300">{link?.icon}</span><span className={`hidden xl:inline-block ${searchSide ? "!hidden" : ""}`}>{link.name}</span></button> : <a className={`flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl group ${window.location.pathname === link.link ? "active" : ""}`} href={`${link?.link}`} ><span className="text-3xl md:text-2xl group-hover:scale-125 duration-300">{link?.icon}</span><span className={`hidden xl:inline-block ${searchSide ? "!hidden" : ""}`}>{link.name}</span></a>}
                            </li>
                        ))}
                        <li className="h-14 flex items-center order-1 md:order-none" ><Link to={`/${username}`} className="flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl" href={`/${username}`} >{profileImg ? <img src={`${profileImg}`} alt="profileImg" className="w-7 h-7 object-cover  rounded-full" /> : <DefaultIcon />}<span className={`hidden xl:inline-block ${searchSide ? "!hidden" : ""}`}>Profile</span></Link></li>
                    </ul>
                </div>

                <MoreLink moreRef={moreRef} searchSide={searchSide} setMoreScreen={setMoreScreen} moreScreen={moreScreen} />

            </aside>

            {/*! searchSide */}

            <SearchSide searchSide={searchSide} />

        </div>

    )
}
