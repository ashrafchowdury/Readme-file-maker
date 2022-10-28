import {
  TextInput,
  Textarea,
  TagInput,
  PlusIcon,
  toaster,
  Button,
} from "evergreen-ui";
import { useData } from "../utils/hooks/useData";

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

export const TextArea = ({ name, title, change, place, value }) => {
  return (
    <>
      <p className=" text-lg !mb-2 font-medium">{title}</p>
      <Textarea
        name={name}
        placeholder={place}
        className=" !h-[150px] !p-5 !leading-7"
        onChange={change}
        value={value}
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

export const Socialinput = () => {
  const { social, setsocial, platforms, setplatforms } = useData();
  let value, name;
  const handleSocial = (e) => {
    name = e.target.name;
    value = e.target.value;
    setsocial({ ...social, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!social.platform && !social.link) {
      toaster.warning("Filup All the Fields");
    } else {
      setplatforms([
        ...platforms,
        { name: social.platform, link: social.link },
      ]);
      setsocial({
        platform: "",
        link: "",
      });
    }
  };
  return (
    <>
      <p className=" text-lg !mb-2 font-medium">Add Social Medias</p>
      <form onSubmit={handleSubmit} className=" flex items-center !mt-0">
        <TextInput
          className={`!w-[20%] !h-[50px] !px-5 `}
          placeholder="Paltform"
          value={social.platform}
          name="platform"
          onChange={handleSocial}
        />
        <TextInput
          className={`!w-[75%] !h-[50px] !px-5  mx-3`}
          name="link"
          placeholder="Account Link"
          value={social.link}
          onChange={handleSocial}
        />
        <Button paddingY={23} paddingX={10}>
          <PlusIcon size={28} />
        </Button>
      </form>
    </>
  );
};
