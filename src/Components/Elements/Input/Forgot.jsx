/* eslint-disable react/prop-types */
const Forgot = (props) => {
    const { text, link1, link2 } = props
    return (
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto h-5.5 flex justify-between items-center mt-[-10px]">
            <div className="flex flex-row text-white leading-[22.4px] tracking-[0.2px] sm:gap-2 gap-1">
                <p className="text-base text-[#9D9EA1]">{text}</p>
                <a className="text-base text-medium" href="">{link1}</a>
            </div>
            <a className="text-base text-[#9D9EA1] leading-[22.4px] tracking-[0.2px]" href="">{link2}</a>
        </div>
    )
}

export default Forgot