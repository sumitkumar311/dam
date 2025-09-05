import React from 'react'
import deepak from "../assets/deepak.jpg"
import mukesh from "../assets/mukesh.jpg"
import ashish from "../assets/ashish.jpg"
import main from "../assets/1.mp4"
import TiltedCard from '../partial/TiltedCard'
import Logo from '../partial/logo'


const About = () => {

  // const teamData = [{
  //   img: deepak,
  //   name: "Deepak Sharma",
  //   title: "Founder"
  // },
  // {
  //   img: mukesh,
  //   name: "Mukesh Kumar",
  //   title: "Founder"
  // },
  // {
  //   img: ashish,
  //   name: "Ashish Jain",
  //   title: "Founder"
  // },]


  return (
    <div className='flex flex-col px-20 max-lg:px-4 gap-20'>

      {/* Heading Section */}
      <div className="mlarge font-bold flex flex-col gap-5 mt-[12rem] max-md:mt-[6rem] justify-center items-center">
        <h1 className="leading-none max-md:text-left text-center tracking-tight w-[76%] max-md:w-full flex flex-wrap justify-center items-center gap-2">
          we plan magic you enjoy the moment
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
      <div className='px-20 max-lg:px-2'>

        <div className='flex py-20 max-lg:py-10 gap-40 max-md:gap-5 max-md:flex-col'>
          <div>
            <div className='flex gap-2 items-center   h-fit'>

              <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
              <p className="uppercase small font-semibold">who we are</p>
            </div>
          </div>

          <h1 className='medium w-[60%] max-md:w-full'>Since our beginning, we have been dedicated to creating smooth, memorable, and meaningful events for our clients. From corporate gatherings to social celebrations, we bring ideas to life with creativity, planning, and flawless execution. With each event, our knowledge and experience grow, allowing us to design occasions that truly reflect our clients’ vision and leave lasting impressions on everyone who attends."</h1>
        </div>

        <div className='p-20 max-lg:p-3 '>

          <div className='mt-[2rem] flex  max-md:flex-col gap-20 max-lg:gap-1'>
            <div className='flex flex-col gap-20 max-lg:gap-10'>

              <TiltedCard
                imageSrc={mukesh}
                captionText="Mukesh kumar - Founder"
                containerHeight="500px"
                containerWidth="450px"
                imageHeight="500px"
                imageWidth="450px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}

              />

              <TiltedCard
                imageSrc={deepak}
                captionText="Deepak Sharma - Founder"
                containerHeight="500px"
                containerWidth="450px"
                imageHeight="500px"
                imageWidth="450px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}

              />
            </div>
            <div className='mt-[10rem] max-lg:mt-10'>
              <TiltedCard
                imageSrc={ashish}
                captionText="Ashish jain - Founder"
                containerHeight="600px"
                containerWidth="450px"
                imageHeight="600px"
                imageWidth="450px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}

              />
            </div>
          </div>

        </div>
      </div>



      <div className=' min-h-[80vh] px-20 max-lg:px-2 gap-8 flex flex-col justify-between'>
        <div className='flex justify-between  max-md:gap-5 max-md:flex-col '>

          <div className='flex gap-2 items-center   h-fit'>
            <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
            <p className="uppercase small font-semibold">our approach</p>
          </div>

          <h1 className='medium w-[60%] max-md:w-full max-md:text-start text-end leading-none'>First step to solving a problem is recognizing there is one.</h1>
        </div>

        <div className='flex justify-between gap-2 max-md:flex-col'>
          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee] p-4 flex-col justify-between max-md:gap-20 h-[45vh] max-md:h-[30vh] '>
            <p className='uppercase small font-semibold'>Elevating Event Exploration</p>
            <p>Tailored for discerning audiences, every moment feels unique and unforgettable.</p>
          </div>

          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee]  h-[45vh]  overflow-hidden '>
            <img src={deepak} className='w-full h-full object-cover' alt="" />
          </div>



          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee] p-4 flex-col justify-between max-md:gap-20 h-[45vh] max-md:h-[30vh] '>
            <p className='uppercase small font-semibold'>Building a high quality community</p>
            <p>Each one crafted to deliver unforgettable experience for guest.</p>
          </div>
          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee] p-4 flex-col justify-between max-md:gap-20 h-[45vh] max-md:h-[30vh] '>
            <p className='uppercase small font-semibold'>Creating authentic experience</p>
            <p>Blending exclusivity and accessibility, we redefine socializing with fresh experiences.</p>
          </div>

          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee]  h-[45vh] overflow-hidden '>
            <img src={deepak} className='w-full h-full object-cover' alt="" />
          </div>



        </div>


      </div>

      {/* new */}
      <div>
        <div>

          <div className='flex px-20 max-lg:px-2 py-20 max-lg:py-10 gap-40 max-md:gap-5 max-md:flex-col'>

            <div className='flex gap-2 items-center   h-fit'>
              <p className="uppercase small font-semibold">We boldly go  where <br /> others hesitate.</p>
            </div>

            <div className='w-[62%] max-md:w-full'>
              <h1 className='medium '>We create unforgettable events, and we’re great at it. Our team is full of passionate experts who know how to bring even the most complex ideas to life. From corporate gatherings to grand celebrations, we put our heart into every detail to make sure your event is a success.
                <br />
                <br />

                Ordinary? Not us. For us, it’s more than just work—it’s about people, experiences, and memories. Every event we plan matters, and every client is special. We handle your events, your timelines, and your peace of mind with care—always.</h1>
              <div className='flex gap-15 mt-[4rem]'>
                <div>
                  <h1 className='mlarge'>40+</h1>
                  <p className='medium'>memebers</p>
                </div>
                <div>
                  <h1 className='mlarge'>400+</h1>
                  <p className='medium'>Events</p>
                </div>
                <div className=''>
                  <h1 className='mlarge'>10 years</h1>
                  <p className='medium'>Of Experience</p>
                </div>
              </div>
            </div>

          </div>
          <div className="relative vid flex justify-center w-full mt-[3rem]  h-[80vh] max-md:h-[40vh] overflow-hidden">
            <video
              className="h-full rounded-4xl w-[100%] object-cover"
              src={main}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className='flex flex-col gap-15 mt-[10rem] max-lg:mt-5'>
          <div className=' border-b-2  py-10 ml-20 max-lg:ml-0'>
            <h1 className='mlarge font-semibold leading-none '>Agency of the Year <br />
              according to <br />Suzuki & TVS</h1>
          </div>
          <div className='flex px-20 max-lg:px-2  max-lg:py-0 gap-40 max-md:gap-5 max-md:flex-col'>
            <div className='flex gap-2 items-center   h-fit'>
              <p className="uppercase small font-semibold">Agency of the Year
                <br />
                according to Suzuki & TVS</p>
            </div>
            <div className='w-[60%] max-md:w-full'>
              <h1 className='medium '>We know awards aren’t everything. But among the many recognitions we’ve received, we’re proud to highlight the most prestigious: being honored by Suzuki and TVS for our creativity, flawless execution, and unforgettable event experiences.</h1>
            </div>
          </div>
          <div className="relative vid flex justify-center w-full mt-[5rem] max-lg:mt-2  h-[80vh] max-md:h-[40vh] overflow-hidden">
            <video
              className="h-full rounded-4xl w-[100%] object-cover"
              src={main}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className='flex flex-col gap-15 mt-[10rem] max-lg:mt-5'>
          <div className=' border-b-2  py-10 ml-20 max-lg:ml-0'>
            <h1 className='mlarge font-semibold leading-none '>We work with <br /> brands from all <br /> over the world</h1>
          </div>
          <Logo  />
          <div className=' flex px-20 max-lg:px-2  max-lg:py-0 gap-40 max-md:gap-5 max-md:flex-col'>
            <div className='flex gap-2 items-center   h-fit'>
              <p className="uppercase small font-semibold">Feedback from
                our clients</p>
            </div>
            <div className='w-[60%] max-md:w-full'>
              <h1 className='medium '>Our event was managed by DAM craft events, and they handled everything from planning to execution with perfection. Their team was professional, creative, and always ready to listen to our ideas. They not only delivered exactly what we asked for but also added valuable suggestions that made the event even better. Working with them was smooth, and we were truly impressed with their dedication and collaborative approach.</h1>
            </div>
          </div>

          <div className='mt-[2rem] flex  max-md:flex-col gap-10 max-lg:gap-1 w-full px-20 max-md:px-0'>
            <div className='flex  w-[50%] max-md:w-full flex-col items-center  gap-20  max-lg:gap-10'>

              <img className='rounded-4xl object-cover h-[65vh] max-md:h-[50vh] w-[80%] max-md:w-full ' src={mukesh} alt="Mukesh kumar - Founder" />
              {/* <img className='rounded-4xl object-cover h-[65vh] max-md:h-[50vh] w-[80%] max-md:w-full ' src={deepak} alt="Deepak Sharma - Founder" /> */}

            </div>
            <div className='mt-[8rem] w-[50%] max-md:w-full max-lg:mt-10'>
              <img className='rounded-4xl object-cover h-[65vh] max-md:h-[50vh] w-[80%] max-md:w-full ' src={ashish} alt="Ashish jain - Founder" />
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-15 mt-[10rem] max-lg:mt-5'>
          <div className=' border-b-2  py-10 ml-20 max-lg:ml-0'>
            <h1 className='mlarge font-semibold leading-none '>Get to know us <br />
              Check it out</h1>
          </div>
          <div className='flex px-20 max-lg:px-2  max-lg:py-0 gap-40 max-md:gap-5 max-md:flex-col'>
            <div className='flex gap-2 items-center   h-fit'>
              <p className="uppercase small font-semibold">Get to know us
                <br />
                Check it out</p>
            </div>
            <div className='w-[60%] max-md:w-full'>
              <h1 className='medium '>We know awards aren’t everything. But among the many recognitions we’ve received, we’re proud to highlight the most prestigious: being honored by Suzuki and TVS for our creativity, flawless execution, and unforgettable event experiences.</h1>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default About