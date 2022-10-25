import React, { useState } from "react";
import { DuplicateIcon, Button, toaster } from "evergreen-ui";
import { useData } from "../context/data_context";


const Raw = () => {
  const { field, features, tools, align } = useData();

  const schema = `
<img src="${field.image}" alt="${field.title}" />
<h1 align="${align}">${field.title}<h1/>
<p align="${align}">${field.project}</p>
  
<br />
  
<h2 align="${align}">Use To Build</h2>
<div align="${align}">
<a href="https://github.com/" target="_blank"> 
  <img src="https://img.shields.io/badge/${
      tools[0]  }-F7DF1E.svg?style=for-the-badge&logo=${tools[0]}&logoColor=black"
    alt="javascript" /> 
</a>&nbsp;
</div>
  
<br />
  
<h2 align="${align}">Features</h2>
<ul align="${align}">
${features.map((value) => {
    return value;})}
</ul>
  
<br />
  
<h2 align="${align}">About Me</h2>
<p align="${align}">${field.project}</p>
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(schema);
    toaster.success("Copied Successfully");
  };
  return (
    <section className="relative  w-full break-words">
      <div className=" absolute top-7 right-6">
        <Button className=" py-5 !px-3" onClick={handleCopy}>
          <DuplicateIcon size={18} />
        </Button>
      </div>

      <pre className=" break-words">{schema}</pre>
    </section>
  );
};

export default Raw;
