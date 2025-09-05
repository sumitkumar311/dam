import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import twogoodgo from "../assets/twogoodgo.mp4";
import obys from "../assets/obys.mp4";
import ScrollFloat from "./ScrollFloat";
import ReadMoreButton from "./ReadMoreButton";



// Reusable Video Block Component
const ServiceVideo = ({ videoSrc, title, description, height = "h-[90vh]", width = "w-full" }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const main = document.querySelector("main");

    const handleEnter = () => {
      video.play();
      gsap.to([video, main], {
        filter: "grayscale(100%)",
        backgroundColor: "grey",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      video.pause();
      gsap.to([video, main], {
        filter: "grayscale(0%)",
        backgroundColor: "black",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${width}`}>
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        className={`object-cover rounded-[30px] max-md:h-[50vh] ${width} ${height}`}
      />
      <h1 className="text-xl leading-none mt-4">
        {title} – <span className="font-normal">{description}</span>
      </h1>
    </div>
  );
};

// Main Services Section
const ProjectSection = () => (
  <div
    id="services"
    className="relative px-40  font-semibold w-full flex flex-col gap-20  max-lg:px-4 "
  >
    {/* <h1 className=" mlarge  w-fit">Our Services</h1> */}
    <ScrollFloat
      animationDuration={1}
      ease='back.inOut(2)'
      scrollStart='center bottom+=50%'
      scrollEnd='bottom bottom-=40%'
      stagger={0.03}
    >
      Our Services
    </ScrollFloat>



    {/* Services grid */}
    <div className=" grid grid-cols-2 gap-30 max-lg:gap-10 w-full min-h-screen max-md:grid-cols-1">
      <div className="flex flex-col gap-12">
        <ServiceVideo
          videoSrc={twogoodgo}
          title="Corporate Events"
          description="Conferences, corporate meet, product launches, seminars, brand promotions"
          height="h-[80vh]"   // 👈 custom height
          width="w-full"       // 👈 custom width
        />
        <ServiceVideo
          videoSrc={obys}
          title="Social Events"
          description="anniversaries, birthdays, private parties"
          height="h-[90vh]"
          width="w-full"
        />
        <ServiceVideo
          videoSrc={obys}
          title="Concerts & Entertainment Shows"
          description="artist management, stage shows"
          height="h-[80vh]"
          width="w-full"
        />
      </div>
      <div className="flex flex-col gap-12 pt-[15rem] max-md:pt-0">
        <ServiceVideo
          videoSrc={twogoodgo}
          title="Brand Promotions & Activations"
          description="Mall & market activations, expos, product displays"
          height="h-[80vh]"
          width="w-full"
        />
        <ServiceVideo
          videoSrc={obys}
          title="Influencer & Celebrity Engagement"
          description="Anchors, hosts, promoters, musicians"
          height="h-[80vh]"
          width="w-full"
        />
        <ServiceVideo
          videoSrc={obys}
          title="On-Site Event Coordination"
          description="Real-time supervision to ensure smooth execution."
          height="h-[80vh]"
          width="w-full"
        />
      </div>
      
    </div>

    <ReadMoreButton label="Visit Services" to="/services" />

  </div>
);

export default ProjectSection;
