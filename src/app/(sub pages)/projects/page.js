import ProjectList from "@/components/projects";
import { projectsData } from "../../data";

import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";

import dynamic from "next/dynamic";
// import Katana from "@/components/models/Katana";

const Katana = dynamic(() => import("@/components/models/Katana"), {
  ssr: false,
});
export default function Project() {
  return (
    <>
      {/* <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      /> */}
      <ProjectList projects={projectsData} />
      <div
        className="flex items-center justify-center fixed -translate-x-1/2 lg:translate-x-0 
      
      -z-10 top-16 lg:top-20 left-[26%] xs:left-[33%] sm:left-[40%] lg:-left-24 h-screen"
      >
        <RenderModel>
          <Katana />
        </RenderModel>
      </div>
    </>
  );
}
