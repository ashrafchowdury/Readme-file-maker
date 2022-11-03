import React, { useState } from "react";
//UI component
import { AddIcon, CrossIcon, SideSheet, Button } from "evergreen-ui";
//Components
import View from "./View";
import Align from "./Align";
import { Input, TextArea, Taginput, Socialinput } from "./Input";
//Custom Hooks
import { useData } from "../utils/hooks/useData";
import { useDisplay } from "../utils/hooks/useDisplay";

const Editor = () => {
  //this state is for show the sidebase on smaller screen
  const [isShown, setIsShown] = useState(false);
  const { display } = useDisplay();
  const {
    field,
    setfield,
    tools,
    settools,
    features,
    setfeatures,
    platforms,
    setplatforms,
  } = useData(); //get the input data

  //get the input field data
  let value, name;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setfield({ ...field, [name]: value });
  };

  //remove the social icon
  const handleRemoveSocial = (name) => {
    const update = platforms.filter((val) => {
      return val.name != name;
    });
    setplatforms(update);
  };

  //make the input field empty
  const handleReset = () => {
    settools([]);
    setfeatures([]);
    setplatforms([]);
    setfield({
      image: "",
      title: "",
      link: "",
      project: "",
      about: "",
    });
  };
  return (
    <>
      <section
        className={`anime ${
          display == false ? "w-full" : "w-[60%]"
        } h-[89vh] overflow-y-auto border-r`}
      >
        <nav className=" w-full h-[70px] px-3 lg:px-8 border-b flex items-center justify-between">
          {/*Condition for showing the Reset button*/}
          {field.title || field.image ? (
            <p
              className=" cursor-pointer font-medium flex items-center"
              onClick={() => handleReset()}
            >
              <CrossIcon size={16} marginRight={5} /> Reset
            </p>
          ) : (
            <p>Editor</p>
          )}

          <Align />
        </nav>

        {/*Input Fields*/}
        <section className="  flex-col items-center justify-center space-y-10 py-5 px-3 lg:p-8">
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
                place="Project Name"
                change={handleChange}
                value={field.title}
                name="title"
              />
              <Input
                title="Website Link"
                place="Drop Your Site URL Here"
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
            place="Add Languages And Frameworks"
            value={tools}
            setvalue={settools}
          />
          <Taginput
            title="Features"
            place="Add Features"
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
            {/*Loop the Social data*/}
            {platforms.map((val, ind) => {
              return (
                <div
                  className=" m-1 lg:m-2 w-[90px] lg:w-28 h-20 lg:h-24 rounded border flex flex-col items-center justify-center relative overflow-hidden"
                  key={ind}
                >
                  <AddIcon
                    size={20}
                    onClick={() => handleRemoveSocial(val.name)}
                    className=" absolute top-2 right-2 rotate-45 cursor-pointer hover:text-[#ff0063] duration-300"
                  />
                  <img
                    src={`https://img.icons8.com/color/144/${val.name.toLowerCase()}`}
                    className="w-[30px] lg:w-[40px]"
                  />
                  <p className="text-sm  lg:text-[16px]">{val.name}</p>
                </div>
              );
            })}
          </div>

          {/*Condition for showing the sidebar*/}
          {/*The sidebar is only show on the smaller screens*/}
          {display == false && (
            <>
              <SideSheet
                isShown={isShown}
                onCloseComplete={() => setIsShown(false)}
                position="right"
                width="90vw"
              >
                <View />
              </SideSheet>

              <Button
                onClick={() => setIsShown(true)}
                className=" w-full py-5 md:py-6 !text-[16px] !text-white !bg-[#FF0063] !border-none"
              >
                Preview
              </Button>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default Editor;
