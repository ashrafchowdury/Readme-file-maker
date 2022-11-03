import React, { useState, createContext, useContext } from "react";


//Custom Hook for storing data
export const DataContext = createContext();
export const useData = () => useContext(DataContext);
const DataContextProvider = ({ children }) => {
  //states for storing the input data
  const [tools, settools] = useState([]);
  const [features, setfeatures] = useState([]);
  const [social, setsocial] = useState({
    platform: "",
    link: "",
  });
  const [platforms, setplatforms] = useState([]);
  const [align, setalign] = useState("left");
  const [field, setfield] = useState({
    image: "",
    title: "",
    link: "",
    project: "",
    about: "",
  });

  //store all the functions in a Object
  const value = {
    field,
    setfield,
    tools,
    settools,
    features,
    setfeatures,
    social,
    setsocial,
    align,
    setalign,
    platforms,
    setplatforms,
  };
  return (
    <>
      <DataContext.Provider value={value}>{children}</DataContext.Provider>;
    </>
  );
};
export default DataContextProvider;
