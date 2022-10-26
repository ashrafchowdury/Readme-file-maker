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
    social,
    setsocial,
  } = useData();

  let value, name;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setfield({ ...field, [name]: value });
  };

  const handleSocialChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setsocial({ ...social, [name]: value });
  };

  return (
    <>
      <section className=" w-[60%] h-full border-r relative">
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

          <p className=" text-lg !mb-4 font-medium flex items-center">
            Add Social Medias{" "}
            <AddIcon
              size={24}
              className=" cursor-pointer ml-3 hover:text-[#ff0063] duration-500"
            />
          </p>

          {social.map((value) => {
            return (
              <Socialinput
                site="name"
                link="link"
                change={handleSocialChange}
                Pvalue={social?.name}
                Lvalue={social?.link}
              />
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Editor;
