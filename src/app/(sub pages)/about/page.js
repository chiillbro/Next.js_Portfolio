// import Image from "next/image";

// import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";
// import Book from "@/components/models/Book";
import dynamic from "next/dynamic";

const Book = dynamic(() => import("@/components/models/Book"), {
  ssr: false,
});

export default function About() {
  return (
    <>
      {/* <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      /> */}

      <div className="w-full h-3/5 xs:h-3/4  sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Book />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl  text-accent">
            Hey there! 👋
          </h1>
          {/* <p className="font-light text-foreground text-lg">
            Let me introduce myself
          </p> */}
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
