import React, { useEffect } from "react";
//Components
import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
import View from "../components/View";
import Footer from "../components/Footer";
//Custom Hooks
import { useData } from "../utils/hooks/useData";
import { useDisplay } from "../utils/hooks/useDisplay";

export default function Home() {
  const { field } = useData();
  const { display } = useDisplay();

  useEffect(() => {
    //Condition for showing alert function
    if (field.image || field.title || field.project) {
      //This window function alert the user when they try to leave the site without finising the work
      window.onbeforeunload = function () {
        return "Are you sure you want to leave?";
      };
    }
  }, [field.title]);

  return (
    <>
      <Navbar />
      <main className="w-[100%] mx-auto flex border">
        <Editor />
        {/*If the screen grater then 1100 pixel then show the View component*/}
        {display && <View />}
      </main>
      <Footer />
    </>
  );
}
