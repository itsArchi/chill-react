import { useState } from "react";

function DropdownWithArrow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Dropdown */}
      <div
        onClick={toggleDropdown}
        className="w-7 h-7 flex items-center justify-center shadow-sm cursor-pointer focus:ring focus:ring-indigo-500 focus:border-indigo-500"
      >
        <img
          src="/arrow-down.png"
          alt="Arrow Down"
          // className={`w-6 h-6 transition-transform ${
          //   isOpen ? "rotate-180" : "rotate-0"
          // }`}
        />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-[156px] h-32 right-[-40px] top-10 bg-[#181A1C] text-white z-10">
          <ul className="text-sm font-medium leading-[19.6px] tracking-[0.2px]">
            <li
              className="p-2 hover:text-blue-600 cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/profile.png" alt="Profile" className="w-6 h-6" />
              <span>Profile Saya</span>
            </li>
            <li
              className="p-2 hover:text-blue-600 cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/star.png" alt="star" className="w-6 h-6" />
              <span>Ubah Premium</span>
            </li>
            <li
              className="p-2 hover:text-blue-600 cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/quit.png" alt="quit" className="w-6 h-6" />
              <span>Keluar</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownWithArrow;
