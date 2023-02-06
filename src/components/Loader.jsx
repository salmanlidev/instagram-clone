import { icons } from "../assets/icons"

export const Loader = () => {
  return (
    <div className="w-full dark:bg-black dark:text-white h-full fixed top-0 left-0 flex flex-col items-center justify-center bg-white text-white text-2xl">
        <icons.instagramIco  size={100} className="text-red-600" />
        <h3 className="text-red-600">Instagram</h3>
    </div>
  )
}
