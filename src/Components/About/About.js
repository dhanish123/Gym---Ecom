// import React, { useEffect, useRef, useState } from "react";
// import "./About.scss";
// import about from "../../images/gabout2.jpg";
// import Readmore from "../Readmore/Readmore";
// import Bounce from "react-reveal/Bounce";
// import Btn3 from "../Btn/Btn3";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const About = () => {
//   const ref = useRef();
//   const [openAbout, setOpenAbout] = useState(false);

//   const handleOpenAbout = () => {
//     setOpenAbout(true);
//     document.body.style.overflow = "hidden";
//   };
//   const handleCloseAbout = () => {
//     setOpenAbout(false);
//     document.body.style.overflow = "auto";
//   };
//   useEffect(() => {
//     const checkIfClickedOutside = (e) => {
//       if (openAbout && ref.current && !ref.current.contains(e.target)) {
//         handleCloseAbout();
//       }
//     };
//     document.addEventListener("mousedown", checkIfClickedOutside);
//     return () => {
//       document.addEventListener("mousedown", checkIfClickedOutside);
//     };
//   }, [openAbout]);

//   return (
//     <>
//       <div className="main" id="About">
//         <div className="about">
//           <img src={about} alt="" />
//         </div>

//         <div className="abouttxt">
//           <Bounce top>
//             <h1 className="ahead">LEARN MORE ABOUT US </h1>
//             <p className="asub">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. debitis
//               id illum labore aperiam. Facilis, mollitia minima? Quis nostrum
//               quam deleniti autem cupiditate optio eligendi eveniet excepturi,
//               dolorum temporibus
//             </p>

//             <Btn3
//               handle={handleOpenAbout}
//               style="secondary"
//               content="Read More"
//             />
//           </Bounce>
//         </div>
//       </div>
//       {openAbout && (
//         <div ref={ref}>
//           <Readmore />
//         </div>
//       )}
//     </>
//   );
// };

// export default About;


//framer 

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import about from "../../images/gabout2.jpg";
import Readmore from "../Readmore/Readmore";
import Btn3 from "../Btn/Btn3";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  const ref = useRef();
  const [openAbout, setOpenAbout] = useState(false);

  const handleOpenAbout = () => {
    setOpenAbout(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseAbout = () => {
    setOpenAbout(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openAbout && ref.current && !ref.current.contains(e.target)) {
        handleCloseAbout();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openAbout]);

  return (
    <>
      <div className="main" id="About">
        <div className="about">
          <img src={about} alt="About us" />
        </div>

        <div className="abouttxt">
          {/* Replaced Bounce with motion.div */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial hidden and above position
            animate={{ opacity: 1, y: 0 }}   // Animate to visible and original position
            transition={{ duration: 1, type: "spring", stiffness: 100 }} // Smooth spring animation
          >
            <h1 className="ahead">LEARN MORE ABOUT US</h1>
            <p className="asub">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              id illum labore aperiam. Facilis, mollitia minima? Quis nostrum
              quam deleniti autem cupiditate optio eligendi eveniet excepturi,
              dolorum temporibus
            </p>

            <Btn3
              handle={handleOpenAbout}
              style="secondary"
              content="Read More"
            />
          </motion.div>
        </div>
      </div>
      {openAbout && (
        <div ref={ref}>
          <Readmore />
        </div>
      )}
    </>
  );
};

export default About;
