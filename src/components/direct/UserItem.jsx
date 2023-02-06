import { images } from "../../assets/images"

export const UserItem = ({ name , image }) => {
    return (
        <div className="flex items-center gap-x-3 hover:bg-gray-50 px-2 py-1 cursor-pointer duration-300">
            <div className="w-14 h-14 rounded-full">
                <img className="w-full h-full object-cover rounded-full"  src={image ? image : images.empty} alt="userImage" />
            </div>
            <div>
                <h4 className="font-medium">{name}</h4>
                <h6 className="text-zinc-500 text-xs">Active now</h6>
            </div>
        </div>
    )
}
