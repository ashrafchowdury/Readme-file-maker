import React, { useState } from "react";
import { Button } from "evergreen-ui";
//Components
import Preview from "./Preview";
import Raw from "./Raw";
//functions
import { downloadFile } from "../utils/functions/download";
//Custom Hooks
import { useData } from "../utils/hooks/useData";
import { useDisplay } from "../utils/hooks/useDisplay";
import { useSchema } from "../utils/hooks/useSchema";

const View = () => {
  const [view, setview] = useState("preview");
  const { field } = useData();
  const { schema } = useSchema();
  const { display } = useDisplay();

  return (
    <article className={`anime1 ${display == false ? "w-full" : "w-[40%]"}`}>
      <nav className=" w-full h-[70px] pl-8 border-b flex items-center justify-between">
        <div>
          <Button
            marginRight={16}
            appearance={view == "preview" && "default"}
            className=" !text-sm lg:!text-[16px] !h-[32px] lg:!h-[40px] capitalize"
            onClick={() => setview("preview")}
            onF
          >
            preview
          </Button>
          <Button
            marginRight={16}
            appearance={view == "raw" && "default"}
            className=" !text-sm lg:!text-[16px] !h-[32px] lg:!h-[40px] capitalize"
            onClick={() => setview("raw")}
          >
            raw
          </Button>
        </div>
        {/*Condition for showing the Download button*/}
        {(field.title || field.image) && (
          <Button
            marginRight={16}
            appearance="primary"
            className=" !text-sm lg:!text-[16px] !h-[32px] lg:!h-[40px] capitalize !bg-[#FF0063] !border-none"
            onClick={() => downloadFile(schema)}
          >
            Download
          </Button>
        )}
      </nav>
      {/*Condition for showing Raw and the Preview component*/}
      {view == "preview" ? <Preview /> : <Raw schema={schema} />}
    </article>
  );
};

export default View;
