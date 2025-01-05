import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Forgot = (props) => {
    const { text, goto, link1, link2 } = props
    return (
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto h-5.5 flex justify-between items-center mt-[-10px]">
            <div className="flex flex-row text-white leading-[22.4px] tracking-[0.2px] sm:gap-2 gap-1">
                <p className="text-base text-[#9D9EA1]">{text}</p>
                <Link className="text-base text-medium" to={goto}>{link1}</Link>
            </div>
            <a className="text-base text-[#9D9EA1] leading-[22.4px] tracking-[0.2px]" href="">{link2}</a>
        </div>
    )
}

export default Forgot