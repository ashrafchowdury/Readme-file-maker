import React from "react";
import { MoonIcon, LightbulbIcon, Button } from "evergreen-ui";

const Navbar = () => {
  return (
    <nav className="nav_anime w-[97%] mx-auto h-16 lg:h-20 flex items-center justify-center">
      <div className=" relative">
        <span className="logo text-2xl lg:text-3xl font-bold font-[Pacifico]">
          Create{">"}Readme
        </span>{" "}
        <span className=" text-[10px] lg:text-xs font-bold absolute top-0 py-[2px] lg:py-1 px-3 rounded-full bg-[#EBF0FF]">
          Beta
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
