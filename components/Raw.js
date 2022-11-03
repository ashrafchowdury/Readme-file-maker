import { DuplicateIcon, Button, toaster } from "evergreen-ui";

//théRaw component is for show the raw HTML data 
const Raw = ({ schema }) => {
  //Copy the schema data
  const handleCopy = () => {
    navigator.clipboard.writeText(schema);
    toaster.success("Copied Successfully");
  };
  return (
    <section className="relative w-full break-words h-[82vh] overflow-y-auto">
      <div className=" absolute top-7 right-6">
        <Button className=" !py-4 !px-2 lg:!py-5 lg:!px-3" onClick={handleCopy}>
          <DuplicateIcon className=" text-[14px] lg:text-lg" />
        </Button>
      </div>

      <pre className=" break-words overflow-auto">{schema}</pre>
    </section>
  );
};

export default Raw;
