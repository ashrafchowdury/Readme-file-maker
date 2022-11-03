import React, { useState } from "react";
//UI component
import {
  AlignmentLeftIcon,
  AlignmentVerticalCenterIcon,
  AlignmentRightIcon,
  Tablist,
  Tab,
  Pane,
} from "evergreen-ui";
//Custom Hooks
import { useData } from "../utils/hooks/useData";
import { useDisplay } from "../utils/hooks/useDisplay";

// This Component Align the Schema Content
const Align = () => {
  const { display } = useDisplay();
  const [options] = useState([
    {
      label: <AlignmentLeftIcon size={16} className=" lg:text my-2" />,
      value: "left",
    },
    {
      label: <AlignmentVerticalCenterIcon size={16} className=" my-2" />,
      value: "center",
    },
    {
      label: <AlignmentRightIcon size={16} className=" my-2" />,
      value: "right",
    },
  ]);
  const { align, setalign } = useData();
  return (
    <div>
      <Pane height={30}>
        <Tablist>
          {options.map((tab) => (
            <Tab
              key={tab.value}
              id={tab.value}
              onSelect={() => setalign(tab.value)}
              isSelected={align === tab.value} //if the align state and the tab.value are equal than stay selected
              aria-controls={`panel-${tab}`}
              paddingY={17}
              margin={0}
            >
              {tab.label}
            </Tab>
          ))}
        </Tablist>
      </Pane>
    </div>
  );
};
export default Align;
