// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Navigate } from "react-router-dom";
// import loadingImage from "../../images/XOsX.gif";
// import loginImg from "../../images/rolex.jpg";
// import "./Login.scss";

// const Login = () => {
//   const { loginWithRedirect, isAuthenticated,isLoading  } = useAuth0();
//   if (isLoading) {
//     return (
//       <div className="loading-img-div">
//         <img src={loadingImage} className="loading-img" alt="loading" />
//       </div>
//     );
//   }

//   if (isAuthenticated) {
//     return <Navigate to="/home" />;
//   }
//   return (
//     <div className="login">
//       <div className="login__outer">
//         <img className="login__image" src={loginImg} alt="github-user" />
//         <button onClick={loginWithRedirect} className="login__btn">
//           login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

//2nd

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
// import loadingImage from "../../images/XOsX.gif";
import loadingImage from "../../images/loading.gif";

import "./Login.scss";
const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();


  
  // if (isLoading) {
  //   return (
  //     <div className="loading-img-div">
  //       <img src={loadingImage} className="loading-img" alt="loading" />
  //     </div>
  //   );
  // }
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="loginauth">
      <button onClick={loginWithRedirect} className="loginauth__btn">
        login
      </button>
     
    </div>
  );
};

export default Login;
