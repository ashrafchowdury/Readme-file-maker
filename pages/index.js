import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
import View from "../components/View";
import { useData } from "../context/data_context";
export default function Home() {
  const { field } = useData();
  useEffect(() => {
    if (field.image || field.title || field.project) {
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
        <View />
      </main>
    </>
  );
}
