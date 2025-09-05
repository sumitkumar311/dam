import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import main from "../assets/1.mp4";
import head from "../assets/head.mp4";
import ink from "../assets/ink.mp4";
import EventSection from "../partial/EventSection";
import ProjectSection from "../partial/ProjectSection";
import ReadMoreButton from "../partial/ReadMoreButton";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (location.pathname === "/") {
      const video = document.querySelector(".vid video");

      if (video) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: video,
            start: "top 80%",   // when video enters viewport
            end: "top 20%",     // finish by this point
            scrub: 2,           // linked with scroll
          },
        });

        // animate width from 80% → 100%
        tl.fromTo(
          video,
          { width: "90%" },
          { width: "100%", }
        );

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col gap-10">
      {/* Heading Section */}
      <div className="mlarge font-bold px-20 max-lg:px-4 flex flex-col gap-5 mt-[12rem] max-md:mt-[6rem] justify-center items-center">
        <h1 className="leading-none max-md:text-left text-center tracking-tight w-[76%] max-md:w-full flex flex-wrap justify-center items-center gap-2">
          Our event agency focused{" "}
          <span className="inline-block w-[150px] h-[60px] rounded-4xl max-md:hidden overflow-hidden align-middle">
            <video
              className="h-full w-full object-cover"
              src={head}
              autoPlay
              loop
              muted
            ></video>
          </span>{" "}
          on creating immersive,
        </h1>

        <p className="medium max-md:w-full lowercase font-medium w-[60%] text-center max-md:text-left leading-none">
          We are an event agency and experience partner focused on seamless
          execution, engaging atmospheres, and unforgettable celebrations.
        </p>
      </div>

      {/* Main Video Section */}
      <div className=" max-md:mt-[1rem] px-20 max-md:px-4 mt-[3rem]">
        <div className="relative vid flex justify-center  h-[80vh] max-md:h-[40vh] overflow-hidden">
          <video
            className="h-full rounded-4xl w-[80%] object-cover" // default width = 80%
            src={main}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>

      {/* Ink Section */}
      <div className="min-h-[100vh] max-lg:h-fit  px-20 max-md:px-4 bg-blue-500  max-lg:flex-col flex gap-10 justify-between items-center ">
        <div className="w-[50%] max-md:hidden bg-amber-400  max-lg:w-full max-w-3xl rounded-4xl overflow-hidden">
          <video
            src={ink}
            data-cursor-size="60"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="w-[50%] bg-amber-400  max-lg:w-full max-w-3xl overflow-hidden flex flex-col gap-5 ">
          <p className="text-xl  max-md:w-full  max-md:text-s leading-snug ">
            Since 2010, we have been helping people plan and enjoy events of all kinds. From small family functions to big celebrations, we focus on making everything smooth and stress-free. Our team takes care of the details, so our clients can relax and enjoy the moment.
            <br />
            <br />

            Over the years, we have created events that people remember with happiness. We listen to what our clients want and turn their ideas into reality. Every event is done with care, creativity, and passion. Our aim is simple — to make every occasion special and leave lasting memories.
          </p>
          <ReadMoreButton label="Read More" to="/about" />
        </div>
      </div>
      {/* Events Section */}
      <EventSection />
      <ProjectSection />

    </div>
  );
};

export default Home;
