import React, { useState } from "react";
import Align from "./Align";

import { Input, TextArea, Taginput, Socialinput } from "./Input";
import { useData } from "../context/data_context";
import { AddIcon } from "evergreen-ui";

const Editor = () => {
  const {
    field,
    setfield,
    tools,
    settools,
    features,
    setfeatures,
    platforms,
    setplatforms,
  } = useData();

  let value, name;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setfield({ ...field, [name]: value });
  };

  const handleRemoveSocial = (name, num) => {
    const update = platforms.splice(num, 1);
    console.log(update);
    // setplatforms(update);
  };
  return (
    <>
      <section className=" w-[60%] h-[82vh] relative overflow-y-auto">
        <nav className=" w-full h-[70px] px-8 border-b flex items-center justify-between">
          <p>Editor</p>

          <Align />
        </nav>
        <section className="  flex-col items-center justify-center space-y-10 p-8">
          <Input
            title="Image URL"
            place="Drop Your Image URL"
            change={handleChange}
            value={field.image}
            name="image"
          />

          <div className=" w-full">
            <div className=" w-full flex space-x-5">
              <Input
                title="Project Name"
                place="Drop Your Image URL"
                change={handleChange}
                value={field.title}
                name="title"
              />
              <Input
                title="Website Link"
                place="Drop Your Image URL"
                change={handleChange}
                value={field.link}
                name="link"
              />
            </div>
            <TextArea
              place="About Project ..."
              change={handleChange}
              value={field.project}
              name="project"
            />
          </div>

          <Taginput
            title="Use To Build"
            place="Drop Your Image URL"
            value={tools}
            setvalue={settools}
          />
          <Taginput
            title="Features"
            place="Drop Your Image URL"
            value={features}
            setvalue={setfeatures}
          />

          <TextArea
            title="About Me"
            place="About Me ..."
            change={handleChange}
            value={field.about}
            name="about"
          />

          <Socialinput />
          <div className=" flex flex-wrap items-center flex-start">
            {platforms.map((val, ind) => {
              return (
                <div className=" m-2 w-28 h-24 rounded border flex flex-col items-center justify-center relative overflow-hidden">
                  <AddIcon
                    size={20}
                    onClick={() => handleRemoveSocial(val.name, ind)}
                    className=" absolute top-2 right-2 rotate-45 cursor-pointer hover:text-[#ff0063] duration-300"
                  />
                  <img
                    src={`https://img.icons8.com/color/144/${val.name.toLowerCase()}`}
                    width="40px"
                  />
                  <p>{val.name}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Editor;
