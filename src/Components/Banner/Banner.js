
// //textback
// import React, { useEffect, useRef, useState } from "react";
// import img1 from "../../images/about2.jpg";
// import "./Banner.scss";
// import Fade from "react-reveal/Fade";
// import Btn3 from "../Btn/Btn3";
// import Rform from "../Rform/Rform";

// const Banner = () => {
//   const ref = useRef(); // startil eth oru null value aayirikkum ,athine oru variable kodkkum
//   const [openJoinform, setOpenJoinform] = useState(false);

//   const handleOpenJoinform = () => {
//     setOpenJoinform(true);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCloseJoinform = () => {
//     setOpenJoinform(false);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const checkIfClickedOutside = (e) => {
//       if (Rform && ref.current && !ref.current.contains(e.target)) {
//         handleCloseJoinform();
//       }
//     };

//     document.addEventListener("mousedown", checkIfClickedOutside);

//     return () => {
//       document.removeEventListener("mousedown", checkIfClickedOutside);
//     };
//   }, [openJoinform]);

//   return (
//     <>
//       {/* <div className="Bmain" id="home">
//         <div className="p1txt">
//           <Fade top>
//             <h3>STEP UP YOUR</h3>
//             <div className="bhmain">
//               <h1 className="bh1">FITNESS </h1>
//               <h1 className="bh2">WITH US</h1>
//             </div>

//             <Btn3
//               handle={handleOpenJoinform}
//               style="primary"
//               content="Join us"
//             />
//           </Fade>
//         </div>
//       </div> */}
//       <div className="swe">
//      <div className="p1txt" style={{ textAlign: 'center' }}>
//           <Fade top>
//             <h3  className="fbh">STEP UP YOUR</h3>
//             <div className="bhmain">
//               <h1 className="bh1" >FITNESS </h1>
//               <h1 className="bh2" >WITH US</h1>
//             </div>

//             <Btn3
//               handle={handleOpenJoinform}
//               style="primary"
//               content="Join us"
//             />
//           </Fade>
//         </div>
//       </div>
//       {openJoinform && (
//         <div ref={ref}>
//           <Rform />
//         </div>
//       )}
//     </>
//   );
// };

// export default Banner;


//framer motion apdate instaed of react-reveal

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../images/about2.jpg";
import "./Banner.scss";
import Btn3 from "../Btn/Btn3";
import Rform from "../Rform/Rform";

const Banner = () => {
  const ref = useRef();
  const [openJoinform, setOpenJoinform] = useState(false);

  const handleOpenJoinform = () => {
    setOpenJoinform(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseJoinform = () => {
    setOpenJoinform(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (Rform && ref.current && !ref.current.contains(e.target)) {
        handleCloseJoinform();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openJoinform]);

  return (
    <>
      <div className="swe">
        <div className="p1txt" style={{ textAlign: "center" }}>
          {/* Replacing Fade with motion.div */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial state: transparent and slightly above
            animate={{ opacity: 1, y: 0 }}   // Final state: fully visible and positioned
            transition={{ duration: 1 }}     // Animation duration
          >
            <h3 className="fbh">STEP UP YOUR</h3>
            <div className="bhmain">
              <h1 className="bh1">FITNESS</h1>
              <h1 className="bh2">WITH US</h1>
            </div>

            <Btn3
              handle={handleOpenJoinform}
              style="primary"
              content="Join us"
            />
          </motion.div>
        </div>
      </div>
      {openJoinform && (
        <div ref={ref}>
          <Rform />
        </div>
      )}
    </>
  );
};

export default Banner;
