import { toaster } from "evergreen-ui";

//function for download the file
export const downloadFile = (schema) => {
  try {
    const a = document.createElement("a");
    const blob = new Blob([schema]);
    a.href = URL.createObjectURL(blob);
    a.download = "Readme.md";
    a.click();
    toaster.success("Download Successfully");
  } catch (error) {
    toaster.danger("Something was wrong!");
  }
};
