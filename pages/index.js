import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-[95%] mx-auto flex">
        <Editor />
        <Preview />
      </main>
    </>
  );
}
