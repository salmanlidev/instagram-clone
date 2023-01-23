import { icons } from "../assets/icons"
import { images } from "../assets/images"
import { useWindowSize } from "../hooks/useWindowSize"

const sidebarLinks = [
    { name: "Home", icon: <icons.home /> },
    { name: "Search", icon: <icons.search /> , },
    { name: "Explore", icon: <icons.explore /> , hidden: true },
    { name: "Reels", icon: <icons.reels /> , hidden: true },
    { name: "Messages", icon: <icons.direct /> , hidden: true },
    { name: "Notifications", icon: <icons.heart /> , left : true },
    { name: "Create", icon: <icons.create /> },
]

export const Sidebar = () => {
    const { width } = useWindowSize()

    console.log(width)
    return (
        <div className="fixed w-full border-t md:static bottom-0 left-0 md:w-20 xl:w-[245px] 2xl:w-[336px] duration-300 md:flex flex-col justify-between bg-white md:border-r border-gray-300 md:py-7 px-4">
            <div className="flex md:flex-col md:gap-y-6">
                <div className="xl:pl-2 hidden md:block">
                    <a href="#" className="flex xl:inline-block items-center justify-center rounded-full hover:bg-gray-50 py-2 xl:py-0 group">
                        {width > 1280 ?   <img className="w-28" src={images.ilogo} alt="logo" /> : <icons.instagramIco className="text-2xl group-hover:scale-125 duration-300" />}
                    </a>
                </div>
                <ul className="flex w-full justify-between md:justify-start md:flex-col gap-1">
                    {sidebarLinks.map((link, index) => (
                        <li key={index} className={`h-14 flex items-center ${link.hidden ? "hidden md:inline-block" : ""} ${link.left ? "order-1 md:order-none" : ""}`}><a className="flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl group" href="#"><span className="text-2xl group-hover:scale-125 duration-300">{link?.icon}</span><span className="hidden xl:inline-block">{link.name}</span></a></li>
                    ))}
                    <li className="h-14 flex items-center order-1 md:order-none" ><a className="flex items-center gap-x-3  w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl" href="#"><span className="w-7 h-7 rounded-full bg-gray-400"></span><span className="hidden xl:inline-block">Profile</span></a></li>
                </ul>
            </div>

            <div>
            <li className="hidden h-14 md:flex items-center"><a className="flex items-center gap-x-3 w-full py-3 px-3 rounded-full duration-300 hover:bg-gray-100 text-xl group" href="#"><span className="2xl group-hover:scale-125 duration-300"><icons.menu/></span><span className="hidden xl:inline-block">More</span></a></li>
            </div>

        </div>
    )
}
