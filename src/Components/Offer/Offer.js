// import React from "react";
// import './Offer.scss'
// import offerr from "../../images/offer.png";
// import Fade from "react-reveal/Fade";

// import Btn3 from "../Btn/Btn3";
// const Offer = () => {

//   return (
//     <div className="Omain" id="Offer">
//       <div className="o1">
//         <img src={offerr} alt="" style={{ width: "100%" }} />
//       </div>
//       <div className="o1txt">
//         <Fade top>
//           <div className="omain">
//             <div className="omain1">
//               <h1 className="oh1">A BIG </h1>
//               <h1 className="oh2">OFFER</h1>
//               <h1 className="oh3">FOR</h1>
//             </div>
//             <h1 className="oh4">THIS SUMMER </h1>
//           </div>
//           <Btn3 style="offer" content="Quick View" to="/offer" />

//         </Fade>
//       </div>
//     </div>
//   );
// };

// export default Offer;

//framer

import React from "react";
import { motion } from "framer-motion";
import "./Offer.scss";
import offerr from "../../images/offer.png";

import Btn3 from "../Btn/Btn3";

const Offer = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 }, // Hidden state: invisible and moves in from above
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 80 },
    }, // Visible state: fades in and slides to position
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="Omain" id="Offer">
      <div className="o1">
        <img src={offerr} alt="Offer Banner" style={{ width: "100%" }} />
      </div>
      <div className="o1txt">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="omain"
        >
          <div className="omain1">
            <h1 className="oh1">A BIG</h1>
            <h1 className="oh2">OFFER</h1>
            <h1 className="oh3">FOR</h1>
          </div>
          <h1 className="oh4">THIS SUMMER</h1>
        </motion.div>

        {/* Button Animation */}
        <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
          <Btn3 style="offer" content="Quick View" to="/offer" />
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;

