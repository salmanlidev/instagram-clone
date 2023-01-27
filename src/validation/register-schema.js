import * as Yup from "yup"

export const RegisterSchema = Yup.object().shape({
    email : Yup.string().required().email(),
    full_name : Yup.string().required() ,
    username : Yup.mixed().required().test({
        message : "Enter a valid username" ,
        test : str => /^[a-z0-9\.\_]+$/i.test(str)
    }) ,
    password : Yup.string().required()
})