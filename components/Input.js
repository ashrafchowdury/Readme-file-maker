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
      <p className=" text-sm md:text-[16px] lg:text-lg mb-2 font-medium">
        {title}
      </p>
      <TextInput
        className={`${
          !size ? "!w-full" : "!w-[50%]"
        } !h-[40px] md:!h-[45px] lg:!h-[50px] !px-5 !text-sm lg:!text-[16px]`}
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
