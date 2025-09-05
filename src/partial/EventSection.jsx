import React from "react";
import { useNavigate } from "react-router-dom";

// Video imports
import main from "../assets/1.mp4";
import corporate from "../assets/corporate.mp4";
import mall from "../assets/mall.mp4";
import market from "../assets/market.mp4";
import advertisement from "../assets/bike.mp4";
import ScrollFloat from "./ScrollFloat";


const EventSection = () => {
  const navigate = useNavigate();

  const videos = {
    corporate,
    mall,
    market,
    advertisement,
    product: advertisement,
  };

  const handleNavigate = (type) => {
    navigate(`/service/${type}`);
  };

  // Renders one video section
  const renderOverview = (id, label, heading, type, videoSize = "medium") => (
    <div className="overview flex flex-col gap-3 w-full">
      <p className="hidden">{id}</p>
      <div
        className="relative w-full"
        onClick={() => handleNavigate(type)}
      >
        <video
          ref={(el) => {
            if (el) {
              el.onmouseenter = () => el.play();
              el.onmouseleave = () => el.pause();
            }
          }}
          className={`object-cover cursor-pointer rounded-4xl transition-all duration-300 ease-in-out ${
            videoSize === "large"
              ? "h-[650px] w-[600px]"
              : videoSize === "full"
              ? "w-full h-[72vh]"
              : "h-[600px] w-[550px]"
          } max-md:w-full max-md:h-[250px]`}
          muted
          playsInline
          preload="metadata"
          src={videos[type] || main}
        />
      </div>
      <div className="flex gap-2 items-center">
      </div>
      <h1 className="medium">
        <span className="font-semibold">

        {label} - <br /> 
        </span>
        
        {heading}</h1>
    </div>
  );

  return (
    <div className="mt-[2rem] relative max-md:rounded-none  bg-black text-white p-40 max-lg:p-4 max-md:py-20">
      <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Our Innovative Efforts
          </ScrollFloat>
      {/* <h1 className="mlarge mb-[8rem] max-md:mb-[2rem] font-semibold ">Event Moments</h1> */}

      {/* First row */}
      <div className="mt-[4rem] flex max-md:flex-col gap-15 max-lg:gap-5 w-full justify-between">
        <div className="w-[50%] max-md:w-full">
          {renderOverview(
            "01",
            "Corporate Event",
            "Turning corporate visions into unforgettable realities.",
            "corporate"
          )}
        </div>
        <div className="w-[40%] mt-[10rem] max-md:mt-[2rem] max-md:w-full">
          {renderOverview(
            "02",
            "Mall Activation",
            "Turning Crowds into Customers.",
            "mall",
            "large"
          )}
        </div>
      </div>

      {/* Product Advertisement */}
      <div className="mt-[4rem] w-full">
        {renderOverview(
          "03",
          "Product Advertisement",
          "Where Movement Meets Marketing",
          "product",
          "full"
        )}
      </div>

      {/* Last row */}
      <div className="mt-[4rem] flex max-md:flex-col max-lg:gap-5 gap-15 w-full justify-between">
        <div className="w-[60%] max-md:w-full">
          {renderOverview(
            "04",
            "Market Activation",
            "Where Movement Meets Marketing",
            "market"
          )}
        </div>
        <div className="w-[40%] mt-[10rem] max-md:mt-[2rem] max-md:w-full">
          {renderOverview(
            "05",
            "Advertisement",
            "Smart Advertising. Real Results.",
            "advertisement",
            "large"
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
