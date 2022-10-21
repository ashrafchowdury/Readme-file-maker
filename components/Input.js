import React, { useState } from "react";
import { TextInput, Textarea, TagInput } from "evergreen-ui";

export const Input = ({ name, title, size }) => {
  console.log(TextInput);
  return (
    <div>
      <p className=" text-lg mb-2 font-medium">{name}</p>
      <TextInput
        width={!size ? "100%" : "50%"}
        height="50px"
        name="text-input-name"
        placeholder={title}
      />
    </div>
  );
};

export const TextArea = ({ name, title }) => {
  return (
    <>
      <p className=" text-lg !mb-2 font-medium">{name}</p>
      <Textarea name="textarea-1" placeholder={title} className=" h-[150px]" />
    </>
  );
};

export const Taginput = ({ name, title }) => {
  const [values, setValues] = useState(["Kauri", "Willow"]);
  return (
    <>
      <p className=" text-lg !mb-2 font-medium">{name}</p>
      <TagInput
        inputProps={{ placeholder: "Add trees..." }}
        values={values}
        className=" !mt-0 pt-0 w-full h-[50px]"
        onChange={(values) => {
          setValues(values);
        }}
      />
    </>
  );
};
