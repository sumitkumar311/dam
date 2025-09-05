import suz from "../assets/logo/suz.svg";
import tvs from "../assets/logo/tvs.svg";
import yamaha from "../assets/logo/yamaha.svg";
import disney from "../assets/logo/disney.svg";
import offroad from "../assets/logo/offroad.svg";
import trimuph from "../assets/logo/trimuph.svg";
import deloitte from "../assets/logo/deloitte.svg";
import urban from "../assets/logo/urban.svg";

const logos = [
  { src: suz, alt: "suzuki logo" },
  { src: tvs, alt: "tvs logo" },
  { src: yamaha, alt: "yamaha logo" },
  { src: disney, alt: "disney logo" },
  { src: offroad, alt: "offroad logo" },
  { src: trimuph, alt: "trimuph logo" },
  { src: deloitte, alt: "deloitte logo" },
  { src: urban, alt: "urban logo" },
  { src: suz, alt: "suzuki logo" },
];

const Logo = () => {
  return (
    <div className="w-full flex  ">
      <div className=" grid  grid-cols-3 max-md:grid-cols-2 gap-y-40 max-lg:gap-y-20 gap-x-8 w-[80%] py-15 max-lg:px-0">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} className="h-9 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;