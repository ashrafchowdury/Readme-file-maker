import React from "react";
import { MoonIcon, LightbulbIcon, Button } from "evergreen-ui";

const Navbar = () => {
  return (
    <nav className="w-[97%] mx-auto h-20 flex items-center justify-between">
      <div className=" relative">
        <span className="logo text-3xl font-bold font-[Pacifico]">
          Create{">"}Readme
        </span>{" "}
        <span className=" text-xs font-bold absolute top-0 py-1 px-3 rounded-full bg-[#EBF0FF]">
          Beta
        </span>
      </div>
      {/* <Button className=" py-4 !px-2">
        <MoonIcon size={18} />
      </Button> */}
    </nav>
  );
};

export default Navbar;
