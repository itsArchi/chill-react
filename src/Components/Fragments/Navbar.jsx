import Logo from "../Elements/Logo/Logo"
import { Link } from "react-router-dom"
import DropDownProfile from "./DropDownProfile"

const Navbar = () => {
    return (
        <div className="w-full h-14 sm:h-24 flex justify-between items-center py-1.5 sm:py-6 px-5 sm:px-20 gap-3 text-white">
            <div className="flex justify-between items-center gap-3 sm:gap-20 text-white text-sm sm:text-lg font-medium leading-[25.2px] tracking-[0.2px]">
                <Logo textHide={true}/>
                <Link to="/">Series</Link>
                <Link to="/">Film</Link>
                <Link to="/">Daftar Saya</Link>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-5 sm:w-10 h-5 sm:h-10 rounded-full" src="/avatar.png" alt="" />
                <DropDownProfile />
            </div>
        </div>
    )
}

export default Navbar