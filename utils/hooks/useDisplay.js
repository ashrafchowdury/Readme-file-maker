import React, { useEffect, useState } from "react";

export const useDisplay = () => {
  const [display, setdisplay] = useState(true);
  useEffect(() => {
    window.innerWidth <= 1050 ? setdisplay(false) : setdisplay(true);
  }, [display]);
  console.log(display);
  return { display };
};
