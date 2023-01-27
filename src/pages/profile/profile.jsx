import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserInfo } from '../../firebase'
import { setUser } from '../../store/features/user/userSlice'
import { BeatLoader } from 'react-spinners'

const Profile = () => {
    const { username } = useParams()
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()


    useEffect(() => {
        getUserInfo(username)
            .then(data => dispatch(setUser(data.data())))
            .catch(e => console.log(e))
    }, [username])

    console.log(location.pathname)

    return (

        <div className='flex flex-col items-center w-full h-full py-9 bg-zinc-50'>
            {user ? <>
                <header className='w-[935px] flex items-center justify-between h-[200px] '>
                    <div className='w-96 flex items-start justify-center h-full'>
                        <div className='w-32 h-32 flex items-center justify-center rounded-full'>
                            <img alt='user_Profile' src={`${user.profileImg ? user.profileImg : images.empty}`} className="w-32 h-32 rounded-full object-cover object-top-right" />
                        </div>
                    </div>
                    <div className='ml-10 w-full flex flex-col items-start py-4 gap-y-5 h-full'>
                        <div className='flex items-center gap-x-4'>
                            <h4 className='text-2xl font-mono tracking-wider'>{user?.username}</h4>
                            <button type='button' className='bg-zinc-100 rounded-lg h-8 px-2 font-medium text-sm'>Edit profile</button>
                            <button type='button' className='text-3xl'><icons.settings /></button>
                        </div>
                        <div className='flex items-center gap-x-14'>
                            <h6 className='flex gap-x-1 font-medium'>{user.posts.length}<span className='font-normal'>posts</span></h6>
                            <h6 className='flex gap-x-1 font-medium'>{user.followers.length}<span className='font-normal'>followers</span></h6>
                            <h6 className='flex gap-x-1 font-medium'>{user.following.length}<span className='font-normal'>following</span></h6>
                        </div>
                    </div>
                </header>
                <div className='w-[935px] h-14 mt-9 flex flex-col items-center'>
                    <div className='w-full flex items-center justify-center gap-x-14 border-t border-gray-200'>
                        <NavLink to={`/${username}`} className={`profileBtn ${location.pathname === "/" + username ? "profileBtnActive" : ""} `}><icons.grid className='profileIcon' /> Posts</NavLink>
                        <NavLink to={`/${username}/saved`} className={`profileBtn ${location.pathname === "/" + username + "/saved" ? "profileBtnActive" : ""} `}><icons.save className='profileIcon' /> Saved</NavLink>
                        <NavLink to={`/${username}/tagged`} className={`profileBtn ${location.pathname === "/" + username + "/tagged" ? "profileBtnActive" : ""} `}><icons.user className='profileIcon' /> Tagged</NavLink>
                    </div>
                </div>
                <article className='w-[935px] h-full flex flex-col items-center mt-32'>
                    <Outlet />
                </article>  
            </> : 
<BeatLoader color="#b6b6b6" className='mt-10' />}

        </div>
    )
}

export default Profile