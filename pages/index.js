import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
import View from "../components/View";
import { useData } from "../utils/hooks/useData";
import { useDisplay } from "../utils/hooks/useDisplay";

export default function Home() {
  const { field } = useData();
  const { display } = useDisplay();

  useEffect(() => {
    if (field.image || field.title || field.project) {
      window.onbeforeunload = function () {
        return "Are you sure you want to leave?";
      };
    }
  }, [field.title]);

  if (display) {
    return (
      <>
        <Navbar />
        <main className="w-[100%] mx-auto flex border">
          <Editor />
          <View />
        </main>
      </>
    );
  } else {
    return (
      <h1 className="logo w-[90%] text-2xl md:text-3xl lg:text-4xl font-bold text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        We Are in the Process of Developing a Solution for Your Display Size
      </h1>
    );
  }
}
