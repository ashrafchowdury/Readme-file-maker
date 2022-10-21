import React, { useState } from "react";
import { SegmentedControl } from "evergreen-ui";
import { Input, TextArea, Taginput } from "./Input";

const Editor = () => {
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
  const [value, setValue] = useState("left");

  return (
    <section className=" w-[60%] h-full border relative">
      <nav className=" w-full h-[70px] px-8 border flex items-center justify-between">
        <p>Editor</p>

        <SegmentedControl
          options={options}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </nav>
      <section className="  flex-col space-y-10 p-8">
        <Input name="Image URL" title="Drop Your Image URL" />

        <div className=" w-full">
          <div className=" w-full flex">
            <Input name="Project Name" title="Drop Your Image URL" />
            <Input name="Website Link" title="Drop Your Image URL" />
          </div>
          <TextArea title="About Project ..." />
        </div>

        <Taginput name="Use To Build" title="Drop Your Image URL" />
        <Taginput name="Features" title="Drop Your Image URL" />

        <TextArea name="About Me" title="About Me ..." />

        <Taginput name="Image URL" title="Drop Your Image URL" />
      </section>
    </section>
  );
};

export default Editor;
