import React, { useState, createContext, useContext } from "react";


export const DataContext = createContext();


export const useData = () => useContext(DataContext);


const DataContextProvider = ({ children }) => {
  const [field, setfield] = useState({
    image: "",
    title: "",
    link: "",
    project: "",
    about: "",
  });
  const [tools, settools] = useState(["Javascript", "React.js"]);
  const [features, setfeatures] = useState(["Responsive", "Dark Mood"]);
  const [social, setsocial] = useState(["Twitter", "Instagram"]);
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
  };
  return (
    <>
      <DataContext.Provider value={value}>{children}</DataContext.Provider>;
    </>
  );
};
export default DataContextProvider;
