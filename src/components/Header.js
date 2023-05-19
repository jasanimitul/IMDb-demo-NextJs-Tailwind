import React from "react"
import Link from "next/link";
// Icons
import {AiFillHome, AiFillInfoCircle} from "react-icons/ai"

import MenuItem from "./MenuItem";
import DarkMode from "./DarkMode";


const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-6">
        <div className="flex">
          <MenuItem title="HOME" path="/" Icon={AiFillHome} />
          <MenuItem title="ABOUT" path="/about" Icon={AiFillInfoCircle} />
        </div>
        <div className="flex items-center space-x-5">
          <DarkMode />
          <Link href={"/"}>
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB Demo</span>
              {/* <span className="text-xl hidden sm:inline">Demo</span> */}
            </h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header;