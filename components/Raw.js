import React, { useState } from "react";
import { DuplicateIcon, Button, toaster } from "evergreen-ui";
import { useData } from "../context/data_context";

const Raw = () => {
  const { field, features, tools } = useData();
  const [value, setvalue] = useState("");

  const data = `
  <img src=${field.image} alt=${field.title} />
  <h1>${field.title}<h1/>
  <p>${field.project}</p>
  
  <br />
  
  <h2>Use To Build</h2>
  <ul>
  ${tools.map((value) => {
    return value;
  })}
  </ul>
  
  <br />
  
  <h2>Features</h2>
  <ul>
  ${features.map((value) => {
    return value;
  })}
  </ul>
  
  <br />
  
  <h2>About Me</h2>
  <p>${field.project}</p>
  
  <br />
 `;

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    toaster.success("Copied Successfully");
  };
  return (
    <section className="relative  w-full break-words">
      <div className=" absolute top-7 right-6">
        <Button className=" py-5 !px-3" onClick={handleCopy}>
          <DuplicateIcon size={18} />
        </Button>
      </div>

      <pre className=" break-words">{data}</pre>
    </section>
  );
};

export default Raw;
