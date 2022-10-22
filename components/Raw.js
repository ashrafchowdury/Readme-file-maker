import React from "react";
import { DuplicateIcon, Button, toaster } from "evergreen-ui";
import { useData } from "../context/data_context";
import ReactMarkdown from "react-markdown";

const Raw = () => {
  const { field, features } = useData();

  return (
    <section className="relative  w-full">
      <div className=" absolute top-7 right-6">
        <Button
          className=" py-5 !px-3"
          onClick={() => toaster.success("Copied Successfully")}
        >
          <DuplicateIcon size={18} />
        </Button>
      </div>

      <img src={field.image} alt="image" />
      <h1>
        <a href={field.link}>{field.title}</a>
      </h1>
      <p>{field.project}</p>

      <br />

      <h2>Features</h2>
      {features.map((val, ind) => {
        return <li key={ind}>{val}</li>;
      })}

      <h2>About Me</h2>
      <p>{field.about}</p>
    </section>
  );
};

export default Raw;
