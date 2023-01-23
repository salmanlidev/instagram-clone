import { useField } from "formik"
import { useEffect, useRef, useState } from "react"
import classNames from "classnames"

export const Input = ({ Label, type = "text", ...props }) => {
    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    const [field, meta , helpers] = useField(props)



    useEffect(() => {
        if (show) {
            setType("text")
            inputRef.current.focus()
        }
        else if (type === "password") {
            setType("password")
            inputRef.current.focus()
        }
    }, [show])

    return (
        <label className="flex gap-x-1 items-center border cursor-text border-gray-300 px-2 rounded-xs w-72 h-10 bg-zinc-50 relative">
            <input ref={inputRef} type={inputType} className={classNames({
                "outline-none w-full bg-zinc-50" : true ,
                "pt-3 text-xs" : field.value
            })} {...field} {...props} />
            <small className={classNames({
                "absolute left-[9px] -translate-y-1/2 translate-x-0 text-gray-500 duration-100 pointer-events-none" : true ,
                "top-1/2 " : !field.value,
                "text-[11px] -translate-y-2 " : field.value,

            })}>{Label}</small>
            {type === "password" && field?.value ? <button type="button" className="font-bold hover:text-gray-600" onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "Show"}</button> : null}
        </label>
    )
}
