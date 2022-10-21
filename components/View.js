import React, { useState } from "react";
import { Button } from "evergreen-ui";
import Preview from "./Preview";
import Raw from "./Raw";
const View = () => {
  const [view, setview] = useState("preview");
  return (
    <article className=" w-[40%] ">
      <nav className=" w-full h-[70px] pl-8 border-b flex items-center justify-between">
        <div>
          <Button
            marginRight={16}
            className=" !text-[16px] !h-[40px] capitalize"
          >
            preview
          </Button>
          <Button
            marginRight={16}
            appearance="minimal"
            className=" !text-[16px] !h-[40px] capitalize"
          >
            raw
          </Button>
        </div>
        <Button
          marginRight={16}
          appearance="primary"
          className=" !text-[16px] !h-[40px] capitalize !bg-[#FF0063] !border-none"
        >
          Download
        </Button>
      </nav>
      <Raw />
    </article>
  );
};

export default View;
