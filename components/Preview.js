import React from "react";
import { useData } from "../utils/hooks/useData";

const Preview = () => {
  const { field, tools, align, features, platforms } = useData();

  return (
    <section
      className={`preview w-full h-[82vh] overflow-y-auto  ${
        align == "center" && "text-center"
      } ${align == "right" && "text-right"}`}
    >
      {field.image && <img src={field.image} alt="image" />}
      <h1>
        <a href={field.link} target="_blank">
          {field.title}
        </a>
      </h1>
      {field.title && <div className="line"></div>}
      <p>{field.project}</p>

      <br />

      {tools.length > 0 && (
        <>
          <h2>🏗️ Use To Build</h2>
          <div className="line"></div>
          {tools?.map((val, ind) => {
            return (
              <a
                href="https://github.com/"
                target="_blank"
                className=" m-2 inline-block"
                key={ind}
              >
                <img
                  src={`${`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${val.toLowerCase()}-colored.svg`}`}
                  width="50px"
                />
              </a>
            );
          })}
        </>
      )}

      <br />

      {features.length > 0 && (
        <>
          <h2>🚀 Features</h2>
          <div className="line"></div>
          {features.map((value, ind) => {
            return <li key={ind}>{value}</li>;
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

      {platforms.length > 0 && (
        <>
          <h2>🔗 Social Medias</h2>
          <div className="line"></div>
          {platforms.map((val, ind) => {
            return (
              <a href={val.link} target="_blank" className=" m-2 inline-block" key={ind}>
                <img
                  src={`https://img.icons8.com/color/144/${val.name.toLowerCase()}`}
                  width="50px"
                />
              </a>
            );
          })}
        </>
      )}
    </section>
  );
};

export default Preview;
