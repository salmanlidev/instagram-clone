import { images } from "../assets/images"
import { icons } from "../assets/icons"
import { Storyitem } from "../components/home/Storyitem"
import { PostItem } from "../components/home/PostItem"


const story = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const Home = () => {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col  items-center pb-20 pt-2">
      <div className="flex gap-x-14">
        <div className="w-full md:w-[450px] flex flex-col gap-y-3">
          <header className="w-full flex md:hidden justify-between border-b border-gray-300 pb-2 px-3 items-center">
            <a href="/" className="flex items-center justify-center"><img className="h-10" src={images.ilogo} alt="logo" /></a>
            <button className="flex justify-center items-center" type="button"><img className="h-7" src={icons.dir} alt="direct" /></button>
          </header>
          <div className="w-[370px] md:w-[450px] overflow-x-auto h-20 flex gap-x-3 items-center ">
            {story.map(s => (
              <Storyitem key={s} />
            ))}
          </div>
          <div className="flex flex-col gap-y-3 px-2 md:px-0">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
        </div>

        <div className="w-[400px] hidden md:block">
          <div className="flex justify-between w-full">
            <div className="flex gap-x-4 items-center">
              <span className="p-5 rounded-full bg-gray-300 border border-red-800">
              </span>
              <h3 className="text-lg">Samir</h3>
            </div>
            <button type="button" className="text-blue-600 text-xs font-bold">Switch</button>
          </div>
          <div className="w-full flex justify-between items-center my-3">
            <h4>Suggestions for you</h4>
            <button type="button" className="text-zinc-900">See all</button>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between w-full">
              <div className="flex gap-x-4 items-center">
                <span className="p-4 rounded-full bg-gray-300 border border-red-800">
                </span>
                <h3 className="text-sm font-mono">yunis</h3>
              </div>
              <button type="button" className="text-blue-600 text-xs font-bold">follow</button>
            </div><div className="flex justify-between w-full">
              <div className="flex gap-x-4 items-center">
                <span className="p-4 rounded-full bg-gray-300 border border-red-800">
                </span>
                <h3 className="text-sm font-mono">yunis</h3>
              </div>
              <button type="button" className="text-blue-600 text-xs font-bold">follow</button>
            </div><div className="flex justify-between w-full">
              <div className="flex gap-x-4 items-center">
                <span className="p-4 rounded-full bg-gray-300 border border-red-800">
                </span>
                <h3 className="text-sm font-mono">yunis</h3>
              </div>
              <button type="button" className="text-blue-600 text-xs font-bold">follow</button>
            </div>
          </div>

          <p className="mt-10">© 2023 Instagram from Meta</p>
        </div>

      </div>

    </div>
  )
}

export default Home