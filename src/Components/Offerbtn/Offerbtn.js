// import React from "react";
// import "./Offerbtn.scss";
// import bg2 from "../../images/ert.jpg";
// // import bg2 from "../../images/readmorebbttnn.jpg";
// import Zoom from "react-reveal/Zoom";
// import { Link } from "react-router-dom";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// import Start from "../Quiz/Start";
// import Quiz from "../Quiz/Quiz";
// import Result from "../Quiz/Result";
// import { DataProvider } from "../Quiz/Context/dataContext";
// import Table from "../Table/Table"

// const Offerbtn = () => {
//   return (
//     <div
//       className="offerbtn"
//       style={{
//         backgroundImage: `url(${bg2}) `,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <Link to={"/"} className="Cb">
//         {" "}
//         <BsFillArrowLeftCircleFill
//           style={{ marginTop: "10px", marginLeft: "10px", fontSize: "22px" }}
//         />
//       </Link>

//       <DataProvider>
//         <Start />

//         <Quiz />

//         <Result />
//       </DataProvider>
//       <Zoom left>
//         <h1 className="offerbtn__a">Courses Offered</h1>
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
//         <Table/>
//       </Zoom>
      
//     </div>
//   );
// };

// export default Offerbtn;


//framer



import React from "react";
import "./Offerbtn.scss";
import bg2 from "../../images/ert.jpg";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Start from "../Quiz/Start";
import Quiz from "../Quiz/Quiz";
import Result from "../Quiz/Result";
import { DataProvider } from "../Quiz/Context/dataContext";
import Table from "../Table/Table";

const Offerbtn = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -50 }, // Initially hidden and shifted left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 80 },
    }, // Visible with a smooth fade and slide
  };

  return (
    <div
      className="offerbtn"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Back Button */}
      <Link to={"/"} className="Cb">
        <BsFillArrowLeftCircleFill
          style={{ marginTop: "10px", marginLeft: "10px", fontSize: "22px" }}
        />
      </Link>

      {/* Quiz Components */}
      <DataProvider>
        <Start />
        <Quiz />
        <Result />
      </DataProvider>

      {/* Main Content with Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="offerbtn__content"
      >
        <h1 className="offerbtn__a">Courses Offered</h1>
        <p>
          The Gold's Gym Fitness Institute GGFI is India's first International
          Fitness Management Institute that offers Fitness Training Courses. It
          offers certificate courses in Fitness Management, Personal Training
          Certification and Spinning Instructing and various short courses. It
          covers a range of subjects to comprehensively address and ensure the
          best international brand practices in India. The 3-month courses are
          monitored by qualified personnel of Gold's Gym, fitness coaches, and
          also host guest lectures by the biggest names in the international
          fitness industry with guaranteed internships and a first-hand
          opportunity to experience fitness training from the world leaders in
          it. GGFI offers the most exciting and up-to-date education pathway to
          gain industry-leading qualifications as a personal trainer as well as
          ongoing training in all aspects of the fitness industry.
        </p>

        <h1>Our Popular Fitness Courses</h1>
        <p>
          Push your fitness further with our gym facilities, group fitness
          classes, freestyle areas, and more.
        </p>
        <p>Online Advanced Personal Training</p>
        <p>GGFI Offline Advanced Personal Training</p>
        <p>
          GGFI Offline Advanced Personal Training + Skill India Government
          Certification
        </p>

        <h1>Other Courses</h1>
        <p>Female Fitness </p>
        <p>Calories Counting</p>
        <p>Intermittent Fasting</p>
        <p>Quick Result Workout</p>
        <p>Functional training</p>
        <p>Special Population & Medical Conditions</p>
        <p>Sports Injuries</p>

        <Table />
      </motion.div>
    </div>
  );
};

export default Offerbtn;

