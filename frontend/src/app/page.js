import Image from "next/image";
import AppStreamCam from "./AppStreamCam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppStreamCam></AppStreamCam>
    </main>
  );
}
