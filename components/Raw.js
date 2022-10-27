import { DuplicateIcon, Button, toaster } from "evergreen-ui";

const Raw = ({ schema }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(schema);
    toaster.success("Copied Successfully");
  };
  return (
    <section className="relative w-full break-words h-[82vh] overflow-y-auto border-l">
      <div className=" absolute top-7 right-6">
        <Button className=" py-5 !px-3" onClick={handleCopy}>
          <DuplicateIcon size={18} />
        </Button>
      </div>

      <pre className=" break-words overflow-auto">{schema}</pre>
    </section>
  );
};

export default Raw;
