import React, { useState } from "react";
import { SegmentedControl } from "evergreen-ui";
const Align = () => {
  const [options] = useState([
    {
      label: <i className="fa-solid fa-align-left p-1 text-lg"></i>,
      value: "left",
    },
    {
      label: <i className="fa-solid fa-align-center p-1 text-lg"></i>,
      value: "center",
    },
    {
      label: <i className="fa-solid fa-align-right p-1 text-lg"></i>,
      value: "right",
    },
  ]);
  const [align, setalign] = useState("left");
  return (
    <>
      <SegmentedControl
        options={options}
        value={align}
        onChange={(val) => setalign(val)}
      />
    </>
  );
};

export default Align;
