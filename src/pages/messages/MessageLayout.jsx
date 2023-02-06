import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { icons } from "../../assets/icons"
import { images } from "../../assets/images"
import { UserItem } from "../../components/direct/UserItem"

const users = [
    { name: "ghostemane" , image : images.ghostemane },
    { name: "EVO Coding Center" , image : images.evo },
    { name: "Tupac Shakur" , image : images.twopac },
    { name: "Crystal Castles" , image : images.crystal },
    { name: "hidra" , image : images.hidra },
    { name: "EVO Coding Center" , image : images.evo },
    { name: "ghostemane" , image : images.ghostemane },
    { name: "Crystal Castles" , image : images.crystal },
    { name: "hidra" , image : images.hidra },
    { name: "ghostemane" , image : images.ghostemane },
    { name: "Crystal Castles" , image : images.crystal },
    { name: "hidra" , image : images.hidra },
    { name: "ghostemane" , image : images.ghostemane },
    { name: "Crystal Castles" , image : images.crystal },
]

const MessageLayout = () => {
    const { user } = useSelector(state => state.auth)

    return (
        <div className="w-full xl:w-1/2 flex mx-auto pb-[11%] md:py-8 ">
            <div className="w-full md:w-1/2 flex flex-col border border-gray-300">
                <div className="flex items-center justify-between border-b border-gray-300 h-14 px-2">
                    <span className="mx-auto font-bold flex items-center gap-x-1">{user.username} <icons.downArrow /></span>
                    <button type="button" className="text-center text-xl"><icons.note /></button>
                </div>
                <div className="direct-user">
                    {users.map((user, index) => (
                        <UserItem key={index} name={user.name} image={user?.image} />
                    ))}
                </div>
            </div>
            {<Outlet />}
        </div>
    )
}

export default MessageLayout