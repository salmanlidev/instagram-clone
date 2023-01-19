import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { images } from "../../assets/images"
import { icons } from "../../assets/icons"
import { linkData } from "../../assets/data/loginlink"

const Register = () => {



    return (
        <div className="h-full flex items-center justify-center flex-col gap-10">
            <div className="flex w-full justify-center">
                <div className="w-[340px] flex flex-col gap-y-3">
                    <div className="border border-gray-300 flex flex-col gap-y-4 items-center pt-10 pb-4">
                        <a href="#">
                            <img className="h-16 flex-none" alt="logo" src={images.ilogo} />
                        </a>
                        <p className="text-center px-4 font-medium text-gray-500">Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</p>
                        <button className="bg-blue-500 text-white rounded-lg h-8 font-bold w-60 flex items-center justify-center gap-x-2" type="submit"><icons.facebookico className="text-lg" /> Facebook ile Giriş yap</button>
                        <div className="flex items-center w-full justify-center gap-x-3">
                            <span className="w-[90px] h-[1px] bg-gray-300"></span>
                            <p className="font-medium text-gray-400 text-sm">YA DA</p>
                            <span className="w-[90px] h-[1px] bg-gray-300"></span>
                        </div>
                        <form className="flex flex-col gap-y-5">
                            <div className="flex flex-col items-center gap-y-2">
                                <input className="border border-gray-300 rounded-xs px-2 text-xs w-60 h-9 bg-gray-50 focus-within:outline-none placeholder:text-[0.7rem]" type="text" placeholder="Telefon numarası veya e-posta" />
                                <input className="border border-gray-300 rounded-xs px-2 text-xs w-60 h-9 bg-gray-50 focus-within:outline-none placeholder:text-[0.7rem]" type="text" placeholder="Adı Soyadı" />
                                <input className="border border-gray-300 rounded-xs px-2 text-xs w-60 h-9 bg-gray-50 focus-within:outline-none placeholder:text-[0.7rem]" type="text" placeholder="Kullanıcı adı" />
                                <input className="border border-gray-300 rounded-xs px-2 text-xs w-60 h-9 bg-gray-50 focus-within:outline-none placeholder:text-[0.7rem]" type="password" placeholder="Şifre" />
                            </div>
                            <p className="text-xs px-4 text-center text-gray-400">
                                Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a yüklemiş olabilir. <a href="#" className="text-blue-900">Daha Fazla Bilgi Al</a>
                            </p>
                            <p className="text-xs px-4 text-center text-gray-400">
                            Kaydolarak, <a href="#" className="text-blue-900" >Koşullarımızı</a>, <a href="#" className="text-blue-900">Gizlilik İlkemizi</a> ve <a href="#" className="text-blue-900">Çerezler İlkemizi</a> kabul etmiş olursun.
                            </p>
                            <button className="bg-blue-400 text-white rounded-lg h-8 font-bold w-60 self-center" type="submit">Kaydol</button>
                        </form>

                    </div>

                    <div className="border border-gray-300 flex items-center gap-x-2 justify-center h-14">
                        <span className="text-sm">Hesabın var mı?</span><a href="/" className="text-sky-800 font-bold text-sm" >Giriş yap</a>
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
                <div className="flex items-center gap-x-4 h-8">{linkData.map((data, index) => (
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

export default Register