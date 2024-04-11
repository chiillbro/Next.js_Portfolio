import React from "react";

import ItemLayout from "./Item.Layout";

const AboutDetails = () => {
  return (
    <section className="py-15 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-6 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-left text-xl md:text-2xl w-full capitalize text-accent">
            Let me introduce myself!
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I'm Siva Sankar Reddy, a passionate Front-end developer based in
            Andhrapradesh, India. I love experimenting and crafting beautiful
            and functional websites. My journey in the world of web development
            began since my mid-college life, the foundation that has become the
            bedrock of my technical proficiency. Today, I bring not only a solid
            understanding of web development principles but also a passion for
            creating seamless and engaging user interfaces.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full xs:col-span-6 flex-col items-start lg:col-span-6"
          }
        >
          <h2 className="font-semibold w-full text-left text-xl sm:text-2xl  text-accent">
            Aesthetics Matter
          </h2>
          <p className=" text-xs sm:text-sm md:text-base font-light  ">
            I don't just code; I design experiences. Paying attention to the
            visual aspect of web development is crucial to me. I believe that a
            well-designed interface enhances user engagement and contributes to
            the overall success of a project.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full xs:col-span-6 flex-col items-start lg:col-span-6 "
          }
        >
          <h2 className="font-semibold w-full text-left text-xl sm:text-2xl text-accent">
            Always Learning{" "}
          </h2>
          <p className=" text-xs sm:text-sm md:text-base font-light ">
            The dynamic nature of the tech industry inspires me to stay on the
            cutting edge. I'm constantly learning and experimenting with new
            tools and technologies to stay ahead of the curve. Whether it's
            attending conferences, participating in online courses, or
            contributing to open-source projects, I'm committed to continuous
            growth.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full md:col-span-4 w-full text-accent !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=chiillbro&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
            alt="my github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={"col-span-full md:col-span-8 w-full text-accent !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=chiillbro&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
            alt="my github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full w-full text-accent"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,express,mongodb,nextjs,ts,tailwind,sass,postgres,prisma,redux,py,django,threejs,git,github,vscode,vite,netlify,heroku,vercel"
            alt="my skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats-ruddy-nine.vercel.app/?user=chiillbro&theme=dark&background=EB545400&hide_border=true&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={"col-span-full md:col-span-6 w-full text-accent !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=chiillbro&repo=Mern-Movies-Database&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
            alt="my github stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
