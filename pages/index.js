import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
import View from "../components/View";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-[95%] mx-auto flex border">
        <Editor />
        <View />
      </main>
    </>
  );
}
