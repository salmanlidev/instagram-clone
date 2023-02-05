import { images } from "../../assets/images"
import { icons } from "../../assets/icons"

export const PostItem = () => {
    return (
        <div className="w-full flex flex-col gap-y-2">
            <div className="flex justify-between items-center border-b border-gray-200 py-2">
                <div className="flex items-center gap-x-2">
                    <img className="h-10 rounded-full" src={images.empty} alt="postProfile" />
                    <h4>s2m1r1</h4>
                    <icons.dot />
                    <h5>2d</h5>
                </div>
                <button type="button" className="text-2xl"><icons.dotHor /></button>
            </div>
            <div className="h-[400px] w-full">
                <img className="w-full h-full object-cover" src={images.sc1} alt="post" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <button type="button" className="text-2xl"><icons.heart /></button>
                    <button type="button" className="text-3xl"><icons.direct /></button>
                    <button type="button"><img className="h-7" src={icons.dir} alt="dir" /></button>
                </div>
                <button type="button" className="text-3xl"><icons.save /></button>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <h5><span>120</span> likes</h5>
                <p className="text-sm w-full">
                    <a className="font-bold" href="#">s2m1r1</a> 1 fevral 2023-cü il tarixində Dövlət Gömrük Komitəsinin Akademiyasında "Winter Cyber Camp"ın açılış tədbiri baş tutdu
                </p>
            </div>
        </div>
    )
}
