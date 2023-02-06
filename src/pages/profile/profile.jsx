import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserInfo } from '../../firebase'
import { setUser } from '../../store/features/user/userSlice'
import { BeatLoader } from 'react-spinners'
import { showModal } from '../../store/features/modal/settingsModalSlice'


const Profile = () => {
    const { username } = useParams()
    const user = useSelector(state => state.user.user)
    const currentUser = useSelector(state => state.auth.user.username)
    const dispatch = useDispatch()


    useEffect(() => {
        getUserInfo(username)
            .then(data => dispatch(setUser(data.data())))
            .catch(e => console.log(e))
    }, [username])



    return (

        <div className='w-full h-full dark:bg-black dark:text-white flex flex-col overflow-y-auto items-center md:py-2 md:py-9 bg-zinc-50'>
            {user ? <>
                <div className={`${window.location.pathname.includes("auth") ? "hidden" : ""} w-full mb-2 border-y border-gray-300 flex md:hidden justify-between py-1 px-3`}>
                    <button onClick={() => dispatch(showModal())} type="button" ><icons.settings className="text-3xl" /></button>
                    <button type='button' className='flex items-center font-bold font-mono'>{user?.username}<icons.downArrow /></button>
                    <button type='button'><icons.addUser className='text-3xl' /></button>
                </div>
                <header className='w-full md:w-[935px] flex items-center justify-between h-[200px] '>
                    <div className='w-52 md:w-96 flex items-start justify-center h-full'>
                        <div className='w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-full'>
                            <img alt='user_Profile' src={`${user.profileImg ? user.profileImg : images.empty}`} className="w-full h-full rounded-full object-cover object-top-right" />
                        </div>
                    </div>
                    <div className='md:ml-10 w-full flex flex-col items-start py-4 gap-y-5 h-full'>
                        <div className={`flex flex-col md:flex-row md:items-center gap-y-2 gap-x-4`}>
                            <h4 className='text-xl font-mono tracking-wider'>{user?.username}</h4>
                            {username === currentUser ? <>
                                <button type='button' className='bg-zinc-200 dark:text-black rounded-lg h-8 w-48 px-2 font-medium text-sm'>Edit profile</button>
                                <button type='button' className='hidden md:block text-3xl'><icons.settings /></button>
                            </> : <>
                                <div className='flex md:flex-row gap-x-2'>
                                    <button type='button' className='px-4 py-1 text-sm bg-blue-500 text-white rounded-lg'>Follow</button>
                                    <button type='button' className='px-4 py-1 text-sm bg-zinc-200 text-black rounded-lg'>Message</button>
                                </div>
                                <button type='button' className="hidden md:block text-sm h-[28px] px-3 bg-zinc-200 rounded-lg"><icons.addUser /></button>
                                <button type='button' className="hidden md:block text-2xl "><icons.dotHor /></button>
                            </>}

                        </div>
                        <div className='hidden md:flex items-center md:gap-x-14'>
                            <h6 className='flex gap-x-1 font-medium'>{user.posts.length}<span className='font-normal'>posts</span></h6>
                            <h6 className='flex gap-x-1 font-medium'>{user.followers.length}<span className='font-normal'>followers</span></h6>
                            <h6 className='flex gap-x-1 font-medium'>{user.following.length}<span className='font-normal'>following</span></h6>
                        </div>
                    </div>
                </header>

                <div className='flex md:hidden items-center px-2 py-2 justify-around  border-t border-gray-300 w-full'>
                    <h6 className='flex flex-col items-center justify-center font-medium'>{user.posts.length}<span className='font-normal text-zinc-500 text-sm'>posts</span></h6>
                    <h6 className='flex flex-col items-center justify-center font-medium'>{user.followers.length}<span className='font-normal text-zinc-500 text-sm'>followers</span></h6>
                    <h6 className='flex flex-col items-center justify-center font-medium'>{user.following.length}<span className='font-normal text-zinc-500 text-sm'>following</span></h6>
                </div>

                <div className='w-full md:w-[935px] h-14 md:mt-9 flex flex-col items-center'>
                    <div className='w-full flex items-center justify-around md:justify-center md:gap-x-14  border-t border-gray-200'>
                        <NavLink to={`/${username}`} className={`profileBtn ${location.pathname === "/" + username ? "profileBtnActive" : ""} `}><icons.grid className=' text-xl md:profileIcon' /> <span className='hidden md:inline'>Posts</span></NavLink>
                        {username === currentUser ? <NavLink to={`/${username}/saved`} className={`profileBtn ${location.pathname === "/" + username + "/saved" ? "profileBtnActive" : ""} `}><icons.save className='text-2xl md:profileIcon' /> <span className='hidden md:inline'>Saved</span></NavLink> : null}

                        <NavLink to={`/${username}/tagged`} className={`profileBtn ${location.pathname === "/" + username + "/tagged" ? "profileBtnActive" : ""} `}><icons.user className='text-2xl md:profileIcon' /> <span className='hidden md:inline'>Tagged</span></NavLink>
                    </div>
                </div>
                <article className='w-full md:w-[935px] overflow-y-auto h-full flex flex-col items-center mt-32'>
                    <Outlet />
                </article>
            </> :
                <BeatLoader color="#b6b6b6" className='mt-10' />}

        </div>
    )
}

export default Profile