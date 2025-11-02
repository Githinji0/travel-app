/* eslint-disable no-unused-vars */
import { useState } from "react";
const ContactInput = ({icon, text,type}) => {
    const [value, setValue] = useState("");
    return (
        <div className="border-slate-800 flex items-center border-b-2  py-2 my-4 rounded-sm shadow-lg bg-white w-[70%]">
            <span className="w-[60%]  flex items-start">
                {icon}
            </span>
            <input onChange={(e) => setValue(e.target.value)} type={type} placeholder={text} className="focus:outline-none border-[0] h-[40px] rounded w-[full] " />
        </div>
    )
}

export default ContactInput