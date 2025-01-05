import Logo from "../Elements/Logo/Logo"
import { Link } from "react-router-dom"
import DropDownProfile from "./DropDownProfile"

const Navbar = () => {
    return (
        <div className="bg-[#181A1C] w-full h-24 flex justify-between items-center py-6.5 px-20">
            <div className="flex justify-between items-center gap-20 text-white text-lg font-medium leading-[25.2px] tracking-[0.2px]">
                <Logo />
                <Link to="/">Series</Link>
                <Link to="/">Film</Link>
                <Link to="/">Daftar Saya</Link>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-10 h-10 rounded-full" src="/avatar.png" alt="" />
                <DropDownProfile></DropDownProfile>
            </div>
        </div>
    )
}

export default Navbar