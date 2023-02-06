import { useState } from "react"
import { icons } from "../../assets/icons"

export const SearchSide = ({ searchSide }) => {
    const [searchBtn , setSearchBtn] = useState(true) 

    return (
        <div className={`bg-white shadow-xl duration-100 dark:bg-black dark:border-r  flex flex-col ${searchSide ? "w-[397px] py-5" : "w-0"}`}>
            <div className={`flex flex-col gap-y-7 border-b border-gray-300 px-3 pb-4 ${searchSide ? "" : "hidden"}`}>
                <h1 className="text-2xl text-black font-medium">Search</h1>
                <div className="w-full h-10 bg-gray-100 flex items-center justify-between px-2 cursor-text ">
                    <icons.search className={`text-lg mr-1 ${searchBtn ? "hidden" : ""}`} />
                    <input type={"text"} onBlur={() => setSearchBtn(false)} onFocus={() => setSearchBtn(true)} className="bg-gray-100 w-full h-full outline-none peer" placeholder="Search" />
                    <button type="button" onClick={() => setSearchBtn(false)} className={`${searchBtn ? "flex" : "hidden"} items-center justify-center text-gray-400 text-xl`}>
                        <icons.close />
                    </button>
                </div>
            </div>
            <div className={`h-full flex flex-col py-2 px-3 relative ${searchSide ? "" : "hidden"}`}>
                <h5 className="font-bold ">Recent</h5>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">No recent searches.</span>
            </div>
        </div>
  )
}
