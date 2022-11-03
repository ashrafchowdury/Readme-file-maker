import React, { useEffect, useState } from "react";

//Custom Hook for
export const useDisplay = () => {
  const [display, setdisplay] = useState(true);
  useEffect(() => {
    //if the screen size is less then 1100 then set false otherwise set true
    window.innerWidth <= 1100 ? setdisplay(false) : setdisplay(true);
  }, [display]);

  return { display };
};
