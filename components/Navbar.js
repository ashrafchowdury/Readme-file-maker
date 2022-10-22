import React from "react";
import { Switch } from "evergreen-ui";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <nav className="w-[95%] mx-auto h-24 flex items-center justify-center">
      <div className="logo text-4xl font-bold font-[Pacifico]">
        Create{">"}Readme
      </div>
      {/* <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        height={20}
      /> */}
    </nav>
  );
};

export default Navbar;
