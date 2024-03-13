import Image from "next/image";

import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
// import Goku from "@/components/models/Goku";

const Goku = dynamic(() => import("@/components/models/Goku"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between relative">
      {/* <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-25"
      /> */}

      <h1 className="absolute top-5 left-5 self-start text-accent font-semibold whitespace-nowrap text-xl xs:text-2xl">
        Front-End developer
      </h1>

      <div
        className="w-full h-screen
      "
      >
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Goku />
        </RenderModel>
      </div>
    </main>
  );
}
