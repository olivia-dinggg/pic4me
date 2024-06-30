import Image from "next/image";
import AppStreamCam from "./AppStreamCam";

import Prompts from "./components/Prompts";
import Posts from "./components/Posts";
import Camera from "./components/Camera";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 p-4 w-screen h-screen max-w-screen min-h-screen bg-slate-100">
      <Prompts />
      <Posts />
      <Camera />
    </div>
  );
}