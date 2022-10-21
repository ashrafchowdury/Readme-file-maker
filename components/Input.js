import React, { useState } from "react";
import { TextInput, Textarea, TagInput } from "evergreen-ui";

export const Input = ({ name, place, title, size, change, value }) => {
  return (
    <div className={`${!size ? "w-full" : "w-[50%]"}`}>
      <p className=" text-lg mb-2 font-medium ">{title}</p>
      <TextInput
        className={`${!size ? "!w-full" : "!w-[50%]"} !h-[50px] !px-5`}
        name={name}
        placeholder={place}
        onChange={change}
        value={value}
      />
    </div>
  );
};

export const TextArea = ({ name, title, change, place }) => {
  return (
    <>
      <p className=" text-lg !mb-2 font-medium">{title}</p>
      <Textarea
        name={name}
        placeholder={place}
        className=" !h-[150px] !p-5"
        onChange={change}
      />
    </>
  );
};

export const Taginput = ({ title, place, value, setvalue }) => {
  return (
    <>
      <p className=" text-lg !mb-2 font-medium">{title}</p>
      <TagInput
        inputProps={{ placeholder: place }}
        values={value}
        className=" !mt-0 pt-0 w-full h-[50px]"
        onChange={(value) => {
          setvalue(value);
        }}
      />
    </>
  );
};
