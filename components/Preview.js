import React from "react";
// import ReactMarkdown from "react-markdown";
import { useData } from "../context/data_context";

const Preview = () => {
  const { field } = useData();
  console.log(field);
  return (
    <section className=" w-full">
      <img src={field.image} alt="image" />
      <h1>
        <a href={field.link}>{field.title}</a>
      </h1>
      <p>{field.project}</p>

      <br />

      <h2>About Me</h2>
      <p>{field.about}</p>
    </section>
  );
};

export default Preview;
