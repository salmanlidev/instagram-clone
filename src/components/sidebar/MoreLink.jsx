import { icons } from "../../assets/icons"
import { logout } from "../../firebase"


const moreLinks = [
    { name: "Settings", icon: <icons.settings /> },
    { name: "Saved", icon: <icons.save /> },
    { name: "Switch appearance", icon: <icons.moon /> },
    { name: "Your activity", icon: <icons.timer /> },
    { name: "Report a problem", icon: <icons.alert /> },
    { name: "Switch accounts", space: true },

]

export const MoreLink = ({ moreRef , setMoreScreen , moreScreen  , searchSide }) => {
    return (
        <div className="h-full flex flex-col justify-end" ref={moreRef}>
            <li className="hidden h-14 md:flex items-center"><button type="button" className="moreBtn group" onClick={() => setMoreScreen(prev => !prev)} ><span className="2xl group-hover:scale-125 duration-300 pointer-events-none"><icons.menu className="pointer-events-none" /></span><span className={`hidden xl:inline-block pointer-events-none ${searchSide ? "!hidden" : ""}`}>More</span></button></li>

            <div className={`w-[220px] duration-300 absolute shadow-lg bottom-20 bg-gray-200 z-10 rounded-sm ${moreScreen ? "scale-100  left-6" : "-left-20 scale-0"}`} >
                <ul className="moreLinks">
                    {moreLinks.map((link, index) => (
                        <li key={index} className={`h-11 flex items-center justify-between ${link.space ? "mt-[3px]" : ""}`}  ><a className="py-[9px] border-b border-gray-200  flex  items-center justify-between w-full px-3 duration-300 bg-white hover:bg-gray-100 text-[16px]" href="#" ><span className="hidden xl:inline-block">{link.name}</span>{link?.icon && <span className="text-2xl">{link?.icon}</span>}</a></li>
                    ))}
                    <li className={`h-11 flex items-center justify-between`}  ><button onClick={async () => await logout()} type="button" className="py-[9px] border-b border-gray-200  flex  items-center justify-between w-full px-3 duration-300 bg-white hover:bg-gray-100 text-[16px]" ><span className="hidden xl:inline-block">Log out</span></button></li>
                </ul>
            </div>
        </div>
    )
}
