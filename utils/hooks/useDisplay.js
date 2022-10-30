import React, { useEffect, useState } from "react";

export const useDisplay = () => {
  const [display, setdisplay] = useState(true);
  useEffect(() => {
    window.innerWidth <= 1100 ? setdisplay(false) : setdisplay(true);
  }, [display]);

  return { display };
};
