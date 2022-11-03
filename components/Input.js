//UI component
import {
  TextInput,
  Textarea,
  TagInput,
  PlusIcon,
  toaster,
  Button,
} from "evergreen-ui";
//Custom Hooks
import { useData } from "../utils/hooks/useData";

/*
name = input filed name
place = placeholder
title = filed name
change = call the onChange function
value = input filed value
setvalue = retrive the value from the input field
*/

//Normal Input field
export const Input = ({ name, place, title, change, value }) => {
  return (
    <div className="w-full">
      <p className=" text-sm md:text-[16px] lg:text-lg mb-2 font-medium">
        {title}
      </p>
      <TextInput
        className="!w-full !h-[40px] md:!h-[45px] lg:!h-[50px] !px-5 !text-sm lg:!text-[16px]"
        name={name}
        placeholder={place}
        onChange={change}
        value={value}
      />
    </div>
  );
};

//Text area field
export const TextArea = ({ name, title, change, place, value }) => {
  return (
    <>
      <p className=" text-sm md:text-[16px] lg:text-lg !mb-2 font-medium">
        {title}
      </p>
      <Textarea
        name={name}
        placeholder={place}
        className=" !h-[120px] lg:!h-[150px] !text-sm lg:!text-[16px] !p-4 lg:!p-5 !leading-7"
        onChange={change}
        value={value}
      />
    </>
  );
};

//Tag Input field
export const Taginput = ({ title, place, value, setvalue }) => {
  return (
    <>
      <p className=" text-sm md:text-[16px] lg:text-lg !mb-2 font-medium">
        {title}
      </p>
      <TagInput
        inputProps={{ placeholder: place }}
        values={value}
        className=" !mt-0 !pl-2 w-full !h-[53px] !overflow-y-auto"
        onChange={(value) => {
          setvalue(value);
        }}
      />
    </>
  );
};

//Social Input field
export const Socialinput = () => {
  const { social, setsocial, platforms, setplatforms } = useData(); //get the input data
  //get the input field data
  let value, name;
  const handleSocial = (e) => {
    name = e.target.name;
    value = e.target.value;
    setsocial({ ...social, [name]: value });
  };

  //Submit the data
  const handleSubmit = (e) => {
    e.preventDefault();
    //If the input field is empty then show the alert component
    if (!social.platform && !social.link) {
      toaster.warning("Filup All the Fields");
    } else {
      //send the input data on the platforms state
      setplatforms([
        ...platforms,
        { name: social.platform, link: social.link },
      ]);
      //make the social field empty
      setsocial({
        platform: "",
        link: "",
      });
    }
  };
  return (
    <>
      <p className=" text-sm md:text-[16px] lg:text-lg !mb-2 font-medium">
        Add Social Medias
      </p>
      <form onSubmit={handleSubmit} className=" flex items-center !mt-0">
        <TextInput
          className={` !w-[30%] lg:!w-[20%] !h-[40px] md:!h-[45px] lg:!h-[50px] !px-5 !text-sm lg:!text-[16px]`}
          placeholder="Website Name"
          value={social.platform}
          name="platform"
          onChange={handleSocial}
        />
        <TextInput
          className={` !w-[65%] lg:!w-[75%] !h-[40px] md:!h-[45px] lg:!h-[50px] !px-5 mx-3 !text-sm lg:!text-[16px]`}
          name="link"
          placeholder="Account Link"
          value={social.link}
          onChange={handleSocial}
        />
        <Button className=" !py-[18px] !px-[9px] md:!py-[21px] md:!px-[11px] lg:!py-6 lg:!px-3">
          <PlusIcon size={28} />
        </Button>
      </form>
    </>
  );
};
