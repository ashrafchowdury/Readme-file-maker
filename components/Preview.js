import React from "react";
import { useData } from "../context/data_context";

const Preview = () => {
  const { field, tools, align, features, platforms } = useData();

  return (
    <section
      className={`preview w-full h-[82vh] overflow-y-auto  ${align == "center" && "text-center"} ${
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

      {tools && (
        <>
          <h2>🏗️ Use To Build</h2>
          <div className="line"></div>
          {tools?.map((val) => {
            return (
              <a
                href="https://github.com/"
                target="_blank"
                className=" m-2 inline-block"
              >
                <img
                  src={`${`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${val}-colored.svg`}`}
                  width="50px"
                />
              </a>
            );
          })}
        </>
      )}

      <br />

      {features && (
        <>
          <h2>🚀 Features</h2>
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

      <br />

      <h2>🔗 Social Medias</h2>
      <div className="line"></div>
      {platforms.map((val) => {
        return (
          <a href={val.link} target="_blank" className=" m-2 inline-block">
            <img
              src={`https://img.icons8.com/color/144/${val.name.toLowerCase()}`}
              width="50px"
            />
          </a>
        );
      })}
    </section>
  );
};

export default Preview;
