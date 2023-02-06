import { icons } from "../../assets/icons"
import { images } from "../../assets/images"

const Message = () => {
    return (
        <div className="hidden w-full h-full border-y border-r border-gray-300 md:flex flex-col gap-y-3 items-center justify-center">
            <div className="w-28 h-28 border border-black rounded-full flex items-center justify-center ">
                <img className="h-14 mt-3" src={icons.dir} alt="images" />
            </div>
            <h1 className="text-xl font-medium">Your Messages</h1>
            <p className="text-zinc-500">Send private photos and messages to a friend or group.</p>
            <button className="w-32 h-8 text-white bg-blue-500 rounded-lg" type="button">
                Send message
            </button>
        </div>
    )
}

export default Message