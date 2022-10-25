import React, { useState, createContext, useContext } from "react";

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [tools, settools] = useState([]);
  const [features, setfeatures] = useState(["Responsive", "Dark Mood"]);
  const [social, setsocial] = useState(["Twitter", "Instagram"]);
  const [align, setalign] = useState("left");
  const [field, setfield] = useState({
    image: "",
    title: "",
    link: "",
    project: "",
    about: "",
    tools: tools,
    features: features,
    social: social,
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
  };
  return (
    <>
      <DataContext.Provider value={value}>{children}</DataContext.Provider>;
    </>
  );
};
export default DataContextProvider;
