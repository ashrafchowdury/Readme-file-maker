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
        className=" !h-[150px] !p-5 !leading-7"
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
        className=" !mt-0 !p-2 w-full h-[53px] !overflow-y-auto"
        onChange={(value) => {
          setvalue(value);
        }}
      />
    </>
  );
};

export const Socialinput = ({ change, site, link, Pvalue, Lvalue }) => {
  return (
    <>
      <TextInput
        className={`!w-[20%] !h-[50px] !px-5 mr-3 !mb-3`}
        name={site}
        placeholder="Platform Name"
        value={Pvalue}
        onChange={change}
      />
      <TextInput
        className={`!w-[78.5%] !h-[50px] !px-5 !mb-3`}
        name={link}
        placeholder="Account Link"
        value={Lvalue}
        onChange={change}
      />
    </>
  );
};
