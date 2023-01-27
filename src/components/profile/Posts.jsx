import { useSelector } from "react-redux"
import { icons } from "../../assets/icons"



export const Posts = () => {
    const { posts } = useSelector(state => state.user.user)
    return (
        <>
            {posts.length > 0 ? "Nese var" :  <div className='flex flex-col items-center gap-y-5'>
                <button type='button' className='border border-black rounded-full p-[14px]'><icons.camera className='text-3xl' /></button>
                <h1 className='text-3xl font-bold'>Share Photos</h1>
                <p className='text-sm'>When you share photos, they will appear on your profile.</p>
                <button className='text-blue-600 text-sm hover:text-blue-900 font-bold'>Share your first photo</button>
            </div> }

        </>

    )
}
