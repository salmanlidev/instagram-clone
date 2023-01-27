import { icons } from "../../assets/icons"
import { useSelector } from "react-redux"

export const ProfileTagged = () => {
    const { tagged } = useSelector(state => state.user.user)
    return (
        <>
            {tagged.length > 0 ? "Nese var" :  <div className='flex flex-col items-center gap-y-5'>
                <button type='button' className='border border-black rounded-full p-[14px]'><icons.user className='text-3xl' /></button>
                <h1 className='text-3xl font-bold'>Photos of you</h1>
                <p className='text-sm'>When people tag you in photos, they'll appear here.</p>
            </div> }

        </>

    )
}