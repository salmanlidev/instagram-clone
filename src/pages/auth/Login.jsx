import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { images } from "../../assets/images"
import { icons } from "../../assets/icons"
import { linkData } from "../../assets/data/loginlink"
import { Input } from "../../components/Input"

const Login = () => {
  const { content } = useSelector(state => state.loginSlider)
  const imgRef = useRef()
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")


  let enable = username && password ? true : false

  useEffect(() => {
    let images = imgRef.current.querySelectorAll("img"),
      total = images.length,
      current = 0
    images[current].classList.remove("opacity-0")
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0")
      }
      else {
        images[total - 1].classList.add("opacity-0")
      }
      images[current].classList.remove("opacity-0")
      if (current === total - 1) {
        current = 0
      }
      else {
        current++
      }
    }

    imageSlider()
    let interval = setInterval(imageSlider, 3000)

    return () => {
      clearInterval(interval)
    }
    
  }, [imgRef])


  console.log(enable)
  return (
    <div className="h-full flex items-center justify-center py-52 flex-col gap-10 bg-gray-50">
      <div className="flex w-full justify-center gap-x-7">
        <div className="hidden lg:flex w-[450px] h-[650px] bg-authbg bg-no-repeat bg-[length:468px_634px]  items-center justify-center duration-300 relative" ref={imgRef}>
          {content.map((img, index) => (
            <img key={index} alt="screenshot" src={`${img}`} className="right-[42px] top-7 duration-700 ease-linear opacity-0 absolute" />
          ))}
        </div>

        <div className="w-[340px] flex flex-col gap-y-3">

          <div className="border border-gray-300 flex flex-col gap-y-4 items-center pt-10 pb-4">
            <a href="#">
              <img className="h-16 flex-none" alt="logo" src={images.ilogo} />
            </a>
            <form className="flex flex-col gap-y-5">
              <div className="flex flex-col items-center gap-y-2">
                <Input value={username} onChange={(e) => setUsername(e.target.value)} type={"text"} Label="Telefon numarası, kullanıcı adı veya e-posta" />
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} Label="Şifre" />
              </div>
              <button disabled={!enable} className="bg-blue-400 text-white rounded-lg h-9 font-bold disabled:opacity-60" type="submit">Giriş yap</button>
            </form>
            <div className="flex items-center w-full justify-center gap-x-3">
              <span className="w-[90px] h-[1px] bg-gray-300"></span>
              <p className="font-medium text-gray-400 text-sm">YA DA</p>
              <span className="w-[90px] h-[1px] bg-gray-300"></span>
            </div>
            <a href="#" className="flex items-center gap-x-2 text-sky-800 font-bold"><icons.facebookico className="text-lg" /> Facebook ile Giriş Yap</a>
            <a href="#" className="text-xs text-sky-900">Şifreni mi unuttun?</a>
          </div>

          <div className="border border-gray-300 flex items-center gap-x-2 justify-center h-14">
            <span className="text-sm">Hesabın yok mu?</span><a href="/auth/register" className="text-sky-800 font-bold text-sm" >Kaydol</a>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-8">
            <h5 className="mt-4">Uygulamayı indir.</h5>
            <div className="flex items-center gap-x-3">
              <a href="#">
                <img className="h-10" src={images.googleplay} alt="download img" />
              </a>
              <a href="#">
                <img className="h-10" src={images.mc} alt="download img" />
              </a>
            </div>
          </div>

        </div>

      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="hidden md:flex items-center gap-x-4 h-8 flex-wrap">{linkData.map((data, index) => (
          <a key={index} href="#" className="text-xs h-5 text-gray-400 hover:border-b" >{data}</a>
        ))}</div>
        <div className="flex items-center gap-x-2 text-gray-400 text-sm">
          <select>
            <option>Türkçe</option>
          </select>

          <span>© 2023 Instagram from Meta</span></div>
      </div>


    </div>
  )
}

export default Login