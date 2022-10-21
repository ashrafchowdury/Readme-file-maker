import React from "react";
import { DuplicateIcon, Button, toaster } from "evergreen-ui";

const Raw = () => {
  return (
    <article className=" relative  w-full">
      <div className=" absolute top-7 right-6">
        <Button
          className=" py-5 !px-3"
          onClick={() => toaster.success("Copied Successfully")}
        >
          <DuplicateIcon size={18} />
        </Button>
      </div>
    </article>
  );
};

export default Raw;
