import React from "react";
import { useData } from "../context/data_context";

const Preview = () => {
  const { field, tools, align, features } = useData();

  return (
    <section
      className={`preview w-full ${align == "center" && "text-center"} ${
        align == "right" && "text-right"
      }`}
    >
      {field.image && <img src={field.image} alt="image" />}
      <h1>
        <a href={field.link}>{field.title}</a>
      </h1>
      {field.title && <div className="line"></div>}
      <p>{field.project}</p>

      <br />

      {tools.lenght > 0 && (
        <>
          <h2>🏗️ Use To Build</h2>
          <div className="line"></div>
          <a href="https://github.com/" target="_blank">
            <img
              src="https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"
              alt="javascript"
            />
          </a>
        </>
      )}

      <br />

      {features && (
        <>
          <h2>🏗️ Features</h2>
          <div className="line"></div>
          {features.map((value) => {
            return <li>{value}</li>;
          })}
        </>
      )}

      <br />

      {field.about && (
        <>
          <h2>👦 About Me</h2>
          <div className="line"></div>
          <p>{field.about}</p>
        </>
      )}
    </section>
  );
};

export default Preview;
