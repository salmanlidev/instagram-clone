import { images } from "../assets/images"
import { icons } from "../assets/icons"


const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="w-full flex justify-between border-b border-gray-300 py-1 px-3 items-center">
          <a href="/" className="flex items-center justify-center"><img className="h-10" src={images.ilogo} alt="logo" /></a>
          <button className="flex justify-center items-center" type="button"><img className="h-7" src={icons.dir} alt="direct" /></button>
      </header>
    </div>
  )
}

export default Home