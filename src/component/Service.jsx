import main from '../assets/1.mp4';

import MajorProjectItem from '../partial/MajorProjectItem';
import corporate from '../assets/corporate.jpg'
const Service = () => {
  const majorProjects = [
  {
    title: "Corporate Event",
    img: corporate,
    year: "Conferences, corporate meet, product launches"
  },
  {
    title: "Promotion & Activation",
    img: "https://images.unsplash.com/photo-1746185766852-8f4dfa81c879?w=600",
    year: "Mall,Market,Road"  
  },
  {
    title: "Engagement",
    img: "https://images.unsplash.com/photo-1726137569914-ae2ad1c634f6?w=600",
    year: "Anchor , host , Supervisors , influencer , Promoter "
  },
  {
    title: "Advertising",
    img: "https://images.unsplash.com/photo-1745953130391-10158d7562ab?w=600",
    year: "Brand promotion, "
  },
  {
    title: "Branding",
    img: "https://images.unsplash.com/photo-1745953130391-10158d7562ab?w=600",
    year: "Vinyl pasting, "
  },
];
  return (
    <div className='flex flex-col px-20 max-lg:px-4 gap-20'>
      <div className="mlarge font-bold flex flex-col gap-5 mt-[12rem] max-md:mt-[6rem] justify-center items-center">
        <h1 className="leading-none max-md:text-left text-center tracking-tight w-[76%] max-md:w-full flex flex-wrap justify-center items-center gap-2">
          Our services  
        </h1>

        <div className="relative vid flex justify-center w-full mt-[5rem]  h-[80vh] max-md:h-[40vh] overflow-hidden">
          <video
            className="h-full rounded-4xl w-[100%] object-cover"
            src={main}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div className="major h-fit leading-[0.9] mt-20 max-md:mt-7 p-[2rem] font-extrabold ">
      <h1 className="py-[1rem] mmedium text-stroke w-fit">
        Our Services
      </h1>
      {majorProjects.map((proj, i) => (
        <a key={i} href={proj.link || "#"} target="_blank" rel="noopener noreferrer">
          <MajorProjectItem {...proj} />
        </a>
      ))}
    </div>
    </div>
  );
};

export default Service;
