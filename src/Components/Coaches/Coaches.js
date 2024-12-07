// import React from "react";
// import "./Coaches.scss";
// import { Link } from "react-router-dom";
// import { BsFillArrowLeftCircleFill} from 'react-icons/bs';

// import { useState } from "react";
// // import Title from "../atoms/Title";
// import img1 from "../images/img1.jpg";
// import img2 from "../images/img2.jpg";
// import img3 from "../images/img3.jpg";
// import img4 from "../images/img4.jpg";
// import img5 from "../images/img5.jpg";
// // import arrow from "../images/1.svg";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Cena",
//     date: "Jan 20 2023",
//     // time: "02:30",
//     fees: "Fees: 50k",
//     desc: "His name is JOHNCENA...............",
//     image: img1,
//   },
//   {
//     id: 2,
//     name: "Reymysterio ",
//     date: "Feb 20 2023",
//     // time: "02:30",
//     fees: " Fees: 60k",
//     desc: "Rey mysterio...... ",
//     image: img2,
//   },
//   {
//     id: 3,
//     name: "Randy Ortan ",
//     date: "Mar 20 2023",
//     // time: "02:30",
//     fees: " Fees: 70k",
//     desc: "Randy Ortan..... ",
//     image: img3,
//   },
//   {
//     id: 4,
//     name: "UnderTaker",
//     date: "Apr 20 2023",
//     // time: "02:30",
//     fees: " Fees: 80k",
//     desc: "UnderTaker......",
//     image: img4,
//   },
//   {
//     id: 5,
//     name: "HHH",
//     date: "May 20 2023",
//     // time: "02:30",
//     fees: " Fees: 100k",
//     desc: " Triple H....",
//     image: img5,
//   },
//   {
//     id: 6,
//     name: "HHH",
//     date: "May 20 2023",
//     // time: "02:30",
//     fees: " Fees: 100k",
//     desc: " Triple H....",
//     image: img5,
//   },
//   {
//     id: 7,
//     name: "Randy Ortan ",
//     date: "Mar 20 2023",
//     // time: "02:30",
//     fees: " Fees: 70k",
//     desc: "Randy Ortan..... ",
//     image: img3,
//   },
//   {
//     id: 8,
//     name: "UnderTaker",
//     date: "Apr 20 2023",
//     // time: "02:30",
//     fees: " Fees: 80k",
//     desc: "UnderTaker......",
//     image: img4,
//   },
//   {
//     id:9 ,
//     name: "Reymysterio ",
//     date: "Feb 20 2023",
//     // time: "02:30",
//     fees: " Fees: 60k",
//     desc: "Rey mysterio...... ",
//     image: img2,
//   },
//   {
//     id: 10,
//     name: "John Cena",
//     date: "Jan 20 2023",
//     // time: "02:30",
//     fees: "Fees: 50k",
//     desc: "His name is JOHNCENA...............",
//     image: img1,
//   },
//   {
//     id: 11,
//     name: "Reymysterio ",
//     date: "Feb 20 2023",
//     // time: "02:30",
//     fees: " Fees: 60k",
//     desc: "Rey mysterio...... ",
//     image: img2,

//   },
//   {
//     id: 12,
//     name: "John Cena",
//     date: "Jan 20 2023",
//     // time: "02:30",
//     fees: "Fees: 50k",
//     desc: "His name is JOHNCENA...............",
//     image: img1,
//   },
//   {
//     id: 13,
//     name: "Randy Ortan ",
//     date: "Mar 20 2023",
//     // time: "02:30",
//     fees: " Fees: 70k",
//     desc: "Randy Ortan..... ",
//     image: img3,
//   },
//   {
//     id:14 ,
//     name: "UnderTaker",
//     date: "Apr 20 2023",
//     // time: "02:30",
//     fees: " Fees: 80k",
//     desc: "UnderTaker......",
//     image: img4,
//   },
//   {
//     id: 15,
//     name: "HHH",
//     date: "May 20 2023",
//     // time: "02:30",
//     fees: " Fees: 100k",
//     desc: " Triple H....",
//     image: img5,
//   },

// ];

// const Coaches = () => {
//   const [active, setAactive] = useState(0);
//   const [isShown, setIsShown] = useState(false);
//   const [text, setText] = useState(0);
//   const [toggle, SetToggle] = useState(false);

//   const handleClick = event => {
//     setIsShown(current => !current);
//   };
//   return (
//     <div className="coaches">
//     <Link to={'/'} className="Cb"> <BsFillArrowLeftCircleFill  style={{marginTop:'10px',marginLeft:'10px',fontSize:'22px'}}/></Link>

//       {/* <div className="content-wrapper"> */}
//         <div className="coaches__outer">

//         {isShown && (
//           <div className="coaches__outer__text"   >
//             {testimonials.map((item, index) => {
//               return (
//                 <div
//                   className="coaches__outer__text__item"
//                   style={{ display: `${active === index  ? "block" : "none"}` }}
//                 >
//                   <h3 style={{ color: "#ff9797" ,fontWeight:'bolder' }}>{item.desc}</h3>
//                 </div>
//               );
//             })}
//           </div>
//              )}

//           <div className="coaches__outer__name" >
//             {testimonials.map((item, index) => {

//               return (
//                 <div className="coaches__outer__name__all"  onClick={handleClick }>
//                   <div
//                     className="coaches__outer__name__all__sec"
//                     // style={{ display: `${text === index ? "block" : "none"}` }}
//                   >

//                   </div>
//                   <div
//                     className="coaches__outer__name__all__image"
//                     onClick={() => setAactive(index)}
//                   >
//                     <div  onClick={() => SetToggle(!toggle) }>
//                       {" "}
//                       <img
//                         onClick={() => setText(index)}
//                         src={item.image}
//                         alt=""
//                       />
//                     </div>
//                   </div>

//                   <div
//                     className="coaches__outer__name__all__cnt"
//                     style={{
//                       display: `${text === index && toggle ? "block" : "none"}`,
//                     }}
//                   >
//                     <div className="coaches__outer__name__all__cnt-names">
//                       {item.name}
//                     </div>
//                     <div className="coaches__outer__name__all__cnt__info">
//                       <h3
//                         style={{ color: "black" }}
//                         className="coaches__outer__name__all__cnt__info__date"
//                       >
//                         {item.date}
//                       </h3>

//                       <h3
//                         style={{ color: "black" }}
//                         className="coaches__outer__name__all__cnt__info__fees"
//                       >
//                         {item.fees}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Coaches;

import React from "react";
import "./Coaches.scss";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { useState } from "react";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import Dropdown from "../Dropdown/Dropdown";
import j from "../../../src/assets/John Cena.mp3";
import ry from "../../../src/assets/Rey-Mysterio.mp3";
import ro from "../../../src/assets/Randy Orton.mp3";
import ut from "../../../src/assets/Undertaker.mp3";
import hhh from "../../../src/assets/HHH.mp3";

const testimonials = [
  {
    id: 1,
    name: "John Cena",
    date: "Jan 20 2023",
    fees: "Fees: 50k",
    desc: "His name is JOHNCENA...............",
    image: img1,
    aud: j,
  },
  {
    id: 2,
    name: "Reymysterio ",
    date: "Feb 20 2023",
    // time: "02:30",
    fees: " Fees: 60k",
    desc: "Rey mysterio...... ",
    image: img2,
    aud: ry,
  },
  {
    id: 3,
    name: "Randy Ortan ",
    date: "Mar 20 2023",
    fees: " Fees: 70k",
    desc: "Randy Ortan..... ",
    image: img3,
    aud: ro,
  },
  {
    id: 4,
    name: "UnderTaker",
    date: "Apr 20 2023",
    fees: " Fees: 80k",
    desc: "UnderTaker......",
    image: img4,
    aud: ut,
  },
  {
    id: 5,
    name: "HHH",
    date: "May 20 2023",
    fees: " Fees: 100k",
    desc: " Triple H....",
    image: img5,
    aud: hhh,
  },
  {
    id: 6,
    name: "HHH",
    date: "May 20 2023",
    fees: " Fees: 100k",
    desc: " Triple H....",
    image: img5,
    aud: hhh,
  },
  {
    id: 7,
    name: "Randy Ortan ",
    date: "Mar 20 2023",
    fees: " Fees: 70k",
    desc: "Randy Ortan..... ",
    image: img3,
    aud: ro,
  },
  {
    id: 8,
    name: "UnderTaker",
    date: "Apr 20 2023",
    fees: " Fees: 80k",
    desc: "UnderTaker......",
    image: img4,
    aud: ut,
  },
  {
    id: 9,
    name: "Reymysterio ",
    date: "Feb 20 2023",
    fees: " Fees: 60k",
    desc: "Rey mysterio...... ",
    image: img2,
    aud: ry,
  },
  {
    id: 10,
    name: "John Cena",
    date: "Jan 20 2023",
    fees: "Fees: 50k",
    desc: "His name is JOHNCENA...............",
    image: img1,
    aud: j,
  },
  {
    id: 11,
    name: "Reymysterio ",
    date: "Feb 20 2023",
    fees: " Fees: 60k",
    desc: "Rey mysterio...... ",
    image: img2,
    aud: ry,
  },
  {
    id: 12,
    name: "John Cena",
    date: "Jan 20 2023",
    fees: "Fees: 50k",
    desc: "His name is JOHNCENA...............",
    image: img1,
    aud: j,
  },
  {
    id: 13,
    name: "Randy Ortan ",
    date: "Mar 20 2023",
    fees: " Fees: 70k",
    desc: "Randy Ortan..... ",
    image: img3,
    aud: ro,
  },
  {
    id: 14,
    name: "UnderTaker",
    date: "Apr 20 2023",
    fees: " Fees: 80k",
    desc: "UnderTaker......",
    image: img4,
    aud: ut,
  },
  {
    id: 15,
    name: "HHH",
    date: "May 20 2023",
    fees: " Fees: 100k",
    desc: " Triple H....",
    image: img5,
    aud: hhh,
  },
];

const Coaches = () => {
  const [active, setAactive] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [text, setText] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div className="coaches">
      <Link to={"/"} className="Cb">
        {" "}
        <BsFillArrowLeftCircleFill
          style={{ marginTop: "10px", marginLeft: "10px", fontSize: "22px" }}
        />
      </Link>

      <div className="coaches__outer">
        <div className="coaches__outer__text">
          {testimonials.map((item, index) => {
            return (
              <div
                className="coaches__outer__text__item"
                style={{ display: `${active === index ? "block" : "none"}` }}
              >
                <h3 style={{ color: "#ff9797", fontWeight: "bolder" }}>
                  {item.desc}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="coaches__outer__name">
          {testimonials.map((item, index) => {
            return (
              <div className="coaches__outer__name__all">
                <div
                  className="coaches__outer__name__all__sec"
                  style={{ display: `${text === index ? "none" : "block"}` }}
                ></div>
                <div
                  className="coaches__outer__name__all__image"
                  onClick={() => setAactive(index)}
                >
                  <div onClick={() => setIsShown(!isShown)}>
                    {" "}
                    <img
                      onClick={() => setText(index)}
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>

                <div
                  className="coaches__outer__name__all__cnt"
                  style={{
                    display: `${text === index ? "block" : "none"}`,
                  }}
                >
                  <div className="coaches__outer__name__all__cnt-names">
                    {item.name}
                  </div>
                  <div className="coaches__outer__name__all__cnt__info">
                    <h3
                      style={{ color: "black" }}
                      className="coaches__outer__name__all__cnt__info__date"
                    >
                      {item.date}
                    </h3>

                    <h3
                      style={{ color: "black" }}
                      className="coaches__outer__name__all__cnt__info__fees"
                    >
                      {item.fees}
                    </h3>
                    <audio controls style={{ width: "164px" }}>
                      <source src={item.aud} type="audio/mp3" />
                    </audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dropdown testimonials={testimonials} />
    </div>
  );
};

export default Coaches;
