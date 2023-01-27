import { images } from "../../assets/images"
import { icons } from "../../assets/icons"
import { Form, Formik } from "formik"
import { Input } from "../../components/Input"
import { RegisterSchema } from "../../validation"
import { register } from "../../firebase"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Register = () => {
    const { user } = useSelector(state => state.auth)

    const handleForm = async (values) => {
        await register(values)
    }

    if(user) {
        return <Navigate to={"/"} />
    }

    return (
        <div className="h-full flex items-center mt-24 md:mt-0 flex-col gap-10">
            <div className="flex w-full justify-center">
                <div className="w-[340px] flex flex-col gap-y-3">
                    <div className="md:border border-gray-300 flex flex-col gap-y-4 items-center pt-10 pb-4">
                        <a href="#">
                            <img className="h-16 flex-none" alt="logo" src={images.ilogo} />
                        </a>
                        <p className="text-center px-4 font-medium text-gray-500">Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</p>
                        <button className="bg-blue-500 text-white rounded-lg h-8 font-bold w-72 flex items-center justify-center gap-x-2" type="submit"><icons.facebookico className="text-lg" /> Facebook ile Giriş yap</button>
                        <div className="flex items-center w-full justify-center gap-x-3">
                            <span className="w-[90px] h-[1px] bg-gray-300"></span>
                            <p className="font-medium text-gray-400 text-sm">YA DA</p>
                            <span className="w-[90px] h-[1px] bg-gray-300"></span>
                        </div>
                        <Formik
                            validationSchema={RegisterSchema}
                            initialValues={{
                                email: "",
                                full_name: "",
                                username: "",
                                password: ""
                            }}

                            onSubmit={handleForm}
                        >
                            {({ isSubmitting, isValid, dirty, values }) => (
                                <Form className="flex flex-col gap-y-5 items-center">
                                    <div className="flex flex-col items-center gap-y-2">
                                        <Input name="email" type="email" Label={"Cep Telefonu Numarası ve ya E-posta"} />
                                        <Input name="full_name" type={"text"} Label="Adı Soyadı" />
                                        <Input name="username" type={"text"} Label="Kullanıcı adı" />
                                        <Input name="password" type={"password"} Label="Şifre" />
                                    </div>
                                    <p className="text-xs px-4 text-center text-gray-400">
                                        Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a yüklemiş olabilir. <a href="#" className="text-blue-900">Daha Fazla Bilgi Al</a>
                                    </p>
                                    <p className="text-xs px-4 text-center text-gray-400">
                                        Kaydolarak, <a href="#" className="text-blue-900" >Koşullarımızı</a>, <a href="#" className="text-blue-900">Gizlilik İlkemizi</a> ve <a href="#" className="text-blue-900">Çerezler İlkemizi</a> kabul etmiş olursun.
                                    </p>
                                    <button disabled={!isValid || !dirty || isSubmitting} onSubmit={(e) => handleForm(e)} className="bg-blue-400 w-72 text-white rounded-lg h-9 font-bold disabled:opacity-60" type="submit">Kayıt ol</button>
                                </Form>
                            )}
                        </Formik>

                    </div>

                    <div className="md:border border-gray-300 flex items-center gap-x-2 justify-center h-14">
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