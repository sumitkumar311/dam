import { ReactLenis, useLenis } from "lenis/react";
import Nav from "./utils/Nav.jsx";
import Routing from "./utils/Routing.jsx";
import Footer from "./partial/Footer.jsx";
import CustomCursor from "./partial/CustomCursor.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
// import Contact from "./partial/Contact.jsx"; 

const App = () => {
  const lenis = useLenis(() => {

  });
  return (
    <>
      <CustomCursor />
      <ReactLenis root> 
        <ScrollToTop />
        <div className="overflow-hidden  flex flex-col gap-5 ">
          <Nav />
          {/* <Contact /> */}
          <Routing />
        </div>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default App;
