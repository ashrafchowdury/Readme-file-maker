import React, { useState } from "react";
import {
  SegmentedControl,
  AlignmentLeftIcon,
  AlignmentVerticalCenterIcon,
  AlignmentRightIcon,
} from "evergreen-ui";
import { useData } from "../context/data_context";
const Align = () => {
  const [options] = useState([
    {
      label: <AlignmentLeftIcon size={18} className=" my-2" />,
      value: "left",
    },
    {
      label: <AlignmentVerticalCenterIcon size={18} className=" my-2" />,
      value: "center",
    },
    {
      label: <AlignmentRightIcon size={18} className=" my-2" />,
      value: "right",
    },
  ]);
  const { align, setalign } = useData();
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
