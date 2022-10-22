import React from "react";
import { DuplicateIcon, Button, toaster } from "evergreen-ui";
import { useData } from "../context/data_context";
import ReactMarkdown from "react-markdown";

const Raw = () => {
  const { field } = useData();

  return (
    <section className="row relative  w-full">
      <div className=" absolute top-7 right-6">
        <Button
          className=" py-5 !px-3"
          onClick={() => toaster.success("Copied Successfully")}
        >
          <DuplicateIcon size={18} />
        </Button>
      </div>

      <ReactMarkdown></ReactMarkdown>
    </section>
  );
};

export default Raw;
