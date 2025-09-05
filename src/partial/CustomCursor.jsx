import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

const CustomCursor = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    let mouse = { x: 0, y: 0 };
    let circlePos = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let xprev = 0;
    let yprev = 0;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const xdiff = e.clientX - xprev;
      const ydiff = e.clientY - yprev;

      velocity.x = xdiff;
      velocity.y = ydiff;

      xprev = e.clientX;
      yprev = e.clientY;
    };

    const tick = () => {
      circlePos.x += (mouse.x - circlePos.x) * 0.15;
      circlePos.y += (mouse.y - circlePos.y) * 0.15;

      velocity.x *= 0.9;
      velocity.y *= 0.9;

      const wobbleX = 1 + velocity.x * 0.02;
      const wobbleY = 1 + velocity.y * 0.02;

      gsap.set(circle, {
        x: circlePos.x,
        y: circlePos.y,
        scaleX: gsap.utils.clamp(0.9, 1.3, wobbleX),
        scaleY: gsap.utils.clamp(0.9, 1.3, wobbleY),
        transformOrigin: "center center",
        // keep centered while scaling
        translateX: "-50%",
        translateY: "-50%",
      });
    };

    // Handle hover size/color changes
    const handleEnter = (e) => {
      const size = e.target.getAttribute("data-cursor-size") || 40;
      gsap.to(circle, {
        width: `${size}px`,
        height: `${size}px`,
        duration: 0.3,
        ease: "power2.out",
      });

      if (e.target.tagName.toLowerCase() === "video") {
        gsap.to(circle, { backgroundColor: "#fff", duration: 0.3 });
      }
    };

    const handleLeave = (e) => {
      gsap.to(circle, {
        width: "10px",
        height: "10px",
        duration: 0.3,
        ease: "power2.out",
      });

      if (e.target.tagName.toLowerCase() === "video") {
        gsap.to(circle, { backgroundColor: "#000", duration: 0.3 });
      }
    };

    const interactiveEls = document.querySelectorAll("[data-cursor-size], video");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tick);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Use a portal to render cursor at the document.body level
  return createPortal(
    <div
      ref={circleRef}
      className="minicircle pointer-events-none w-[10px] h-[10px] bg-black rounded-full fixed top-0 left-0 z-[99999]"
      style={{
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        mixBlendMode: "difference",
        boxShadow: "0 0 0 2px #fff, 0 0 8px 2px rgba(0,0,0,0.15)", // fallback outline for visibility
      }}
    />,
    document.body
  );
};

export default CustomCursor;
