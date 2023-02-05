import { useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useDispatch, useSelector } from "react-redux"
import { BeatLoader } from "react-spinners"
import { icons } from "../../assets/icons"
import { getImages } from "../../store/features/photos/photosSlice"





const Explore = () => {
    const { photos , loading , error } = useSelector(state => state.photos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getImages())
    } , [])

    console.log(photos)

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col">
            <form className="w-full p-2 md:hidden">
                <div className="w-full px-2 h-10 flex gap-x-2 items-center bg-zinc-200 rounded-lg">
                    <button type="submit" className="flex items-center justify-center text-xl"><icons.search /></button>
                    <input className="w-full outline-none  bg-transparent" type="text" placeholder="Search..." />
                </div>
            </form>

            <div className="gallery">
                {loading ? <BeatLoader  color="#b6b6b6" className='mt-10' /> : photos.map((photo , index) => (
                    <div className="pics" key={index} >
                        <LazyLoadImage src={photo?.urls?.full} alt="images" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore