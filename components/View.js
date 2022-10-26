import React, { useState } from "react";
import { Button } from "evergreen-ui";
import Preview from "./Preview";
import Raw from "./Raw";
import { useData } from "../context/data_context";

const View = () => {
  const [view, setview] = useState("preview");
  const { field, features, tools, align } = useData();

  const schema = `
<img src="${field.image}" alt="${field.title}" />
<h1 align="${align}">${field.title}</h1>
<p align="${align}">${field.project}</p>
  
<br />
  
<h2 align="${align}">🏗️ Use To Build</h2>
<div align="${align}">
${tools.map((val) => {
  return `
<a href="https://github.com/" target="_blank">
<img
  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${val}-colored.svg"
  width="50px"
/>
</a>&nbsp;
  `;
})}

</div>
  
<br />
  
<h2 align="${align}">🚀 Features</h2>
<ul align="${align}">
${features.map((value) => `<li>${value}</li>`)}
</ul>
  
<br />
  
<h2 align="${align}">👦 About Me</h2>
<p align="${align}">${field.project}</p>
`;

  //download file
  const downloadMarkdownFile = () => {
    try {
      const a = document.createElement("a");
      const blob = new Blob([schema]);
      a.href = URL.createObjectURL(blob);
      a.download = "Readme.md";
      a.click();
      toaster.success("Download Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article className=" w-[40%] ">
      <nav className=" w-full h-[70px] pl-8 border-b flex items-center justify-between">
        <div>
          <Button
            marginRight={16}
            appearance={view == "preview" && "default"}
            className=" !text-[16px] !h-[40px] capitalize"
            onClick={() => setview("preview")}
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
        <Button
          marginRight={16}
          appearance="primary"
          className=" !text-[16px] !h-[40px] capitalize !bg-[#FF0063] !border-none"
          onClick={downloadMarkdownFile}
        >
          Download
        </Button>
      </nav>
      {view == "preview" ? <Preview /> : <Raw schema={schema} />}
    </article>
  );
};

export default View;
