import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { NavLink, useNavigate, Link } from "react-router-dom";
// import gsap from "gsap";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  // Scroll direction detection for nav show/hide
  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          if (curr < lastScroll - 5) {
            setShowNav(true);
          } else if (curr > lastScroll + 5) {
            setShowNav(false);
          }
          lastScroll = curr;
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate nav in/out
  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: showNav ? 0 : -100,
      autoAlpha: showNav ? 1 : 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [showNav]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }, 100);
  };

  const activeStyle = ({ isActive }) =>
    isActive
      ? "relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:h-[0.7px] after:bg-black after:w-full after:-translate-x-1/2 after:scale-x-100 after:origin-center after:transition-transform after:duration-500"
      : "relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:h-[0.7px] after:bg-black after:w-full after:-translate-x-1/2 after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100";

  // 🔥 Animated text component
  const AnimatedText = ({ text }) => (
    <span className="relative block overflow-hidden h-[1em] leading-none">
      {/* First copy */}
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {text}
      </span>
      {/* Second copy */}
      <span className="block absolute left-0 top-full transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {text}
      </span>
    </span>
  );

  return (
    <div className="">
      <nav ref={navRef} className="flex justify-between pt-5 px-20 max-md:px-4 pb-1 fixed top-0 left-0 w-full z-[200] bg-white backdrop-blur-md  transition-all duration-500 items-center">
        <Link
          to="/"
          className="text-xl uppercase font-semibold tracking-tighter leading-none cursor-pointer"
        >
          dam <br /> craft <br /> events.
        </Link>
        <ul className="nav-links flex gap-10 text-[1.2rem] h-fit font-normal relative">
          <li className="hidden sm:block">
            <NavLink className={({ isActive }) => `group ${activeStyle({ isActive })}`} to="/">
              <AnimatedText text="Home" />
            </NavLink>
          </li>
          <li className="hidden sm:block">
            <NavLink className={({ isActive }) => `group ${activeStyle({ isActive })}`} to="/about">
              <AnimatedText text="Company" />
            </NavLink>
          </li>
          <li className="hidden sm:block">
            <NavLink className={({ isActive }) => `group ${activeStyle({ isActive })}`} to="/services">
              <AnimatedText text="Services" />
            </NavLink>
          </li>
          <li className="hidden sm:block">
            <NavLink className={({ isActive }) => `group ${activeStyle({ isActive })}`} to="/work">
              <AnimatedText text="Work" />
            </NavLink>
          </li>

          {/* Mobile menu toggle */}
          <li className="block sm:hidden">
            <i
              className={`ri-${menuOpen ? "close-line" : "menu-2-line"} cursor-pointer text-xl`}
              onClick={toggleMenu}
            ></i>
          </li>

          <li className="hidden sm:block">
            <i className="ri-add-line cursor-pointer"></i>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-[60%] bg-white z-[100] shadow-lg translate-x-full p-8 flex flex-col gap-8 uppercase font-semibold text-base sm:hidden"
      >
        {/* Close Button (top-right) */}
        <div className="flex justify-end">
          <i
            className="ri-close-line text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        <button
          onClick={() => handleNavigate("/")}
          className="text-left border-b border-zinc-300 pb-2 group"
        >
          <AnimatedText text="Home" />
        </button>
        <button
          onClick={() => handleNavigate("/about")}
          className="text-left border-b border-zinc-300 pb-2 group"
        >
          <AnimatedText text="Company" />
        </button>
        <button
          onClick={() => handleNavigate("/work")}
          className="text-left border-b border-zinc-300 pb-2 group"
        >
          <AnimatedText text="Work" />
        </button>
        <button
          onClick={() => handleNavigate("/services")}
          className="text-left border-b border-zinc-300 pb-2 group"
        >
          <AnimatedText text="Services" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
