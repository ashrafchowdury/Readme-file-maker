import React, { useState } from "react";
import { Button } from "evergreen-ui";
import Preview from "./Preview";
import Raw from "./Raw";
import { useSchema } from "../utils/hooks/useSchema";
import { downloadFile } from "../utils/functions/download";
import { useData } from "../utils/hooks/useData";

const View = () => {
  const [view, setview] = useState("preview");
  const { field } = useData();
  const { schema } = useSchema();

  return (
    <article className=" w-[40%]">
      <nav className=" w-full h-[70px] pl-8 border-b flex items-center justify-between">
        <div>
          <Button
            marginRight={16}
            appearance={view == "preview" && "default"}
            className=" !text-[16px] !h-[40px] capitalize"
            onClick={() => setview("preview")}
            onF
          >
            preview
          </Button>
          <Button
            marginRight={16}
            appearance={view == "raw" && "default"}
            className=" !text-[16px] !h-[40px] capitalize"
            onClick={() => setview("raw")}
          >
            raw
          </Button>
        </div>
        {(field.title || field.image) && (
          <Button
            marginRight={16}
            appearance="primary"
            className=" !text-[16px] !h-[40px] capitalize !bg-[#FF0063] !border-none"
            onClick={() => downloadFile(schema)}
          >
            Download
          </Button>
        )}
      </nav>
      {view == "preview" ? <Preview /> : <Raw schema={schema} />}
    </article>
  );
};

export default View;
