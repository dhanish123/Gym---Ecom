// import React from "react";
// import "./Form.scss";
// import Button from "react-bootstrap/Button";
// import Btn3 from "../Btn/Btn3";
// import { toast } from "react-toastify";
// import BgVideo from "../Bg Video/BgVideo";

// const Form = () => {
//   const Fnotify = () => {
//     toast.success("Send", {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };
//   return (
//     <div className="outerform" id="Contact">
//       <BgVideo />

//       <div className="form">
//         <h1 className="formhead">GET IN TOUCH WITH US</h1>
//         <form className="contactform">
//           <input
//             className="cf1"
//             type="text"
//             placeholder="Full Name"
//             style={{ backgroundColor: "black" }}
//           />
//           <input
//             className="cf1"
//             type="text"
//             placeholder="Type Your Email"
//             style={{ backgroundColor: "black" }}
//           />
//           <textarea
//             className="cf2"
//             name=""
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Write Here . . ."
//             // style={{ backgroundColor: "black" }}
//           ></textarea>
//           {/* <Button variant="danger" onClick={Fnotify}>
//             Send
//           </Button>{" "} */}
//           <Btn3 onClick={Fnotify} style="primary" content="Send" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;


//email.js

import React,{useState, useRef} from 'react';
import emailjs from "@emailjs/browser";
import "./Form.scss";
import Button from "react-bootstrap/Button";
import Btn3 from "../Btn/Btn3";
import { toast } from "react-toastify";
import BgVideo from "../Bg Video/BgVideo";

const Form = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({});


  const Fnotify = () => {
        toast.success("Send", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
      setDone(false)
      setNotDone(false)
  }

  const sendEmail = (e) => {
  e.preventDefault();
  
  if(!formData.from_name || !formData.reply_to ||!formData.message){
    setNotDone(true)
  } else {
    
    //  Please use your own credentials from emailjs or i will recive your email
    
  emailjs
    .sendForm(
      'service_04om6vh',
      'template_8n9l9wf',
      form.current,
      'TKqNXjU1xniNmKwwF'
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
      form.current.reset(); //reset the input field
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  };
  return (
    <div className="outerform" id="Contact">
      <BgVideo />

      <div className="form">
        <h1 className="formhead">GET IN TOUCH WITH US</h1>
        <form ref={form} onSubmit={sendEmail} className='contactform'>
                <input type="text" name="from_name" className="cf1"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="cf1" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="cf2" placeholder="Message" onChange={handleChange} />
                <span className='submit-alert-msg' >{notDone && "Please, fill all the input field"}</span>
                {/* <Button type="submit" className="button" disabled={done}>Send</Button> */}
              <Btn3 onClick={Fnotify} style="primary" content="Send" />

                <span className='submit-msg'>{done && "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
                </form>
      </div>
    </div>
  );
};

export default Form;
