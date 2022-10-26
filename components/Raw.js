import React, { useState } from "react";
import { DuplicateIcon, Button, toaster } from "evergreen-ui";
import { useData } from "../context/data_context";

const Raw = ({ schema }) => {
  const { field, features, tools, align } = useData();

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

      <pre className=" break-words overflow-auto">{schema}</pre>
    </section>
  );
};

export default Raw;
