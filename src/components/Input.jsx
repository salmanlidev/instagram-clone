import { useEffect, useRef, useState } from "react"

export const Input = ({ Label, type = "text", ...props }) => {
    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

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
            <input ref={inputRef} required={true} type={inputType} className="outline-none w-full bg-zinc-50 peer valid:pt-3 valid:text-xs" {...props} />
            <small className="absolute top-1/2 left-[9px] -translate-y-1/2 translate-x-0 peer-valid:text-[11px] peer-valid:-translate-y-4 peer-valid:-translate-x-[] text-gray-500 duration-100 pointer-events-none">{Label}</small>
            {type === "password" && props?.value ? <button type="button" className="font-bold hover:text-gray-600" onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "Show"}</button> : null}
        </label>
    )
}
