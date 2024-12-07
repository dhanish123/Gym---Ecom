// import React from "react";
// import "./Readmore.scss";
// import bg4 from "../../images/bg4.avif";
// // import bg4 from "../../images/readmorebbttnn.jpg";
// import Zoom from "react-reveal/Zoom";

// const Readmore = () => {
//   return (
//     <div
//       className="readmore"
//       style={{
//         backgroundImage: `url(${bg4}) `,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       {/* <LightSpeed> */}
//       <Zoom left>
//         <h1>Courses Offered</h1>
//         <p>
//           The Gold's Gym Fitness Institute GGFI is India's first International
//           Fitness Management Institute that offers Fitness Training Courses. It
//           offers certificate courses in Fitness Management, Personal Training
//           Certification and Spinning Instructing and various short courses. It
//           covers a range of subjects to comprehensively address and ensure the
//           best international brand practices in India. The 3 month courses are
//           monitored by qualified personnel of Gold's Gym, fitness coach and also
//           hosts guest lectures by the biggest names in the international fitness
//           industry with guaranteed internships and a first-hand opportunity to
//           experience fitness training from the world leaders in it. GGFI offers
//           the most exciting and up-to-date education pathway to gain industry
//           leading qualifications as a personal trainer as well as ongoing
//           training in all aspects of the fitness industry.
//         </p>
//         <h1>Our Popular Fitness Courses</h1>
//         <p>
//           Push your fitness further with our gym facilities, group fitness
//           classes, freestyle areas and more.
//         </p>
//         <p>nline Advanced Personal Training</p>
//         <p>GGFI Offline Advanced Personal Training</p>
//         <p>
//           GGFI Offline Advanced Personal Training + Skill India Government
//           Certification
//         </p>

//         <h1>Other Courses</h1>
//         <p>Female Fitness </p>
//         <p>Calories Counting</p>
//         <p>Intermittent Fasting</p>
//         <p>Quick Result Workout</p>
//         <p>Functional training</p>
//         <p>Special Population & Medical Conditions</p>
//         <p>Sports Injuries</p>

//         <h1>Courses Offered</h1>
//         <p>
//           The Gold's Gym Fitness Institute GGFI is India's first International
//           Fitness Management Institute that offers Fitness Training Courses. It
//           offers certificate courses in Fitness Management, Personal Training
//           Certification and Spinning Instructing and various short courses. It
//           covers a range of subjects to comprehensively address and ensure the
//           best international brand practices in India. The 3 month courses are
//           monitored by qualified personnel of Gold's Gym, fitness coach and also
//           hosts guest lectures by the biggest names in the international fitness
//           industry with guaranteed internships and a first-hand opportunity to
//           experience fitness training from the world leaders in it. GGFI offers
//           the most exciting and up-to-date education pathway to gain industry
//           leading qualifications as a personal trainer as well as ongoing
//           training in all aspects of the fitness industry.
//         </p>
//         <h1>Our Popular Fitness Courses</h1>
//         <p>
//           Push your fitness further with our gym facilities, group fitness
//           classes, freestyle areas and more.
//         </p>
//         <p>nline Advanced Personal Training</p>
//         <p>GGFI Offline Advanced Personal Training</p>
//         <p>
//           GGFI Offline Advanced Personal Training + Skill India Government
//           Certification
//         </p>

//         <h1>Courses Offered</h1>
//         <p>
//           The Gold's Gym Fitness Institute GGFI is India's first International
//           Fitness Management Institute that offers Fitness Training Courses. It
//           offers certificate courses in Fitness Management, Personal Training
//           Certification and Spinning Instructing and various short courses. It
//           covers a range of subjects to comprehensively address and ensure the
//           best international brand practices in India. The 3 month courses are
//           monitored by qualified personnel of Gold's Gym, fitness coach and also
//           hosts guest lectures by the biggest names in the international fitness
//           industry with guaranteed internships and a first-hand opportunity to
//           experience fitness training from the world leaders in it. GGFI offers
//           the most exciting and up-to-date education pathway to gain industry
//           leading qualifications as a personal trainer as well as ongoing
//           training in all aspects of the fitness industry.
//         </p>
//         <h1>Our Popular Fitness Courses</h1>
//         <p>
//           Push your fitness further with our gym facilities, group fitness
//           classes, freestyle areas and more.
//         </p>
//         <p>nline Advanced Personal Training</p>
//         <p>GGFI Offline Advanced Personal Training</p>
//         <p>
//           GGFI Offline Advanced Personal Training + Skill India Government
//           Certification
//         </p>

//         <h1>Other Courses</h1>
//         <p>Female Fitness </p>
//         <p>Calories Counting</p>
//         <p>Intermittent Fasting</p>
//         <p>Quick Result Workout</p>
//         <p>Functional training</p>
//         <p>Special Population & Medical Conditions</p>
//         <p>Sports Injuries</p>

//         <h1>Courses Offered</h1>
//         <p>
//           The Gold's Gym Fitness Institute GGFI is India's first International
//           Fitness Management Institute that offers Fitness Training Courses. It
//           offers certificate courses in Fitness Management, Personal Training
//           Certification and Spinning Instructing and various short courses. It
//           covers a range of subjects to comprehensively address and ensure the
//           best international brand practices in India. The 3 month courses are
//           monitored by qualified personnel of Gold's Gym, fitness coach and also
//           hosts guest lectures by the biggest names in the international fitness
//           industry with guaranteed internships and a first-hand opportunity to
//           experience fitness training from the world leaders in it. GGFI offers
//           the most exciting and up-to-date education pathway to gain industry
//           leading qualifications as a personal trainer as well as ongoing
//           training in all aspects of the fitness industry.
//         </p>
//         <h1>Our Popular Fitness Courses</h1>
//         <p>
//           Push your fitness further with our gym facilities, group fitness
//           classes, freestyle areas and more.
//         </p>
//         <p>nline Advanced Personal Training</p>
//         <p>GGFI Offline Advanced Personal Training</p>
//         <p>
//           GGFI Offline Advanced Personal Training + Skill India Government
//           Certification
//         </p>
//         {/* </LightSpeed> */}
//       </Zoom>
//     </div>
//   );
// };

// export default Readmore;


//framer

import React from "react";
import { motion } from "framer-motion";
import "./Readmore.scss";
import bg4 from "../../images/bg4.avif";

const Readmore = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: invisible and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring", stiffness: 50 } }, // Final state: visible and in place
  };

  return (
    <div
      className="readmore"
      style={{
        backgroundImage: `url(${bg4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Wrap animated content in motion.div */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Courses Offered</h1>
        <p>
          The Gold's Gym Fitness Institute GGFI is India's first International
          Fitness Management Institute that offers Fitness Training Courses. It
          offers certificate courses in Fitness Management, Personal Training
          Certification, and Spinning Instructing, as well as various short
          courses. It covers a range of subjects to comprehensively address and
          ensure the best international brand practices in India. The 3-month
          courses are monitored by qualified personnel of Gold's Gym, fitness
          coaches, and also host guest lectures by the biggest names in the
          international fitness industry with guaranteed internships and a
          first-hand opportunity to experience fitness training from the world
          leaders in it. GGFI offers the most exciting and up-to-date education
          pathway to gain industry-leading qualifications as a personal trainer
          as well as ongoing training in all aspects of the fitness industry.
        </p>

        <h1>Our Popular Fitness Courses</h1>
        <p>
          Push your fitness further with our gym facilities, group fitness
          classes, freestyle areas, and more.
        </p>
        <ul>
          <li>Online Advanced Personal Training</li>
          <li>GGFI Offline Advanced Personal Training</li>
          <li>
            GGFI Offline Advanced Personal Training + Skill India Government
            Certification
          </li>
        </ul>

        <h1>Other Courses</h1>
        <ul>
          <li>Female Fitness</li>
          <li>Calories Counting</li>
          <li>Intermittent Fasting</li>
          <li>Quick Result Workout</li>
          <li>Functional Training</li>
          <li>Special Population & Medical Conditions</li>
          <li>Sports Injuries</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Readmore;

