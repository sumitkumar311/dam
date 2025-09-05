import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const ReadMoreButton = ({ label = "Read More", to }) => {
  const containerRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowDivChildRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const arrowDiv = arrowDivRef.current;
    const arrowDivChild = arrowDivChildRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(arrowDivChild, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      transformOrigin: "center center",
      boxShadow: "0 0 30px rgba(255, 105, 180, 0.2)",
    });

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    arrowDiv.addEventListener("mouseenter", handleEnter);
    arrowDiv.addEventListener("mouseleave", handleLeave);

    return () => {
      arrowDiv.removeEventListener("mouseenter", handleEnter);
      arrowDiv.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center w-full h-full"
    >
      <div
        ref={arrowDivRef}
        className="arrowdiv relative bg-transparent border-2 border-black px-10 py-3 rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <span>{label}</span>
        <div
          ref={arrowDivChildRef}
          className="arrowdivchild absolute w-full h-full scale-0 opacity-0 flex justify-center items-center bg-black text-white rounded-full font-medium text-lg"
        >
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreButton;
