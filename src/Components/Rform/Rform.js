import React from "react";
import "./Rform.scss";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
const Rform = () => {
  const Notify = () => {
    toast.success("Send", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="screen">
      <div className="screen__content">
        <form className="login">
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input
              type="text"
              className="login__input"
              placeholder="User name / Email"
            />
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="password"
              className="login__input"
              placeholder="Password"
            />
          </div>
          <button className="button login__submit">
            <span className="button__text" onClick={Notify}>Log In Now</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
        </form>
        <div className="social-login">
          <h3 >log in via </h3>
          <div className="social-icons">
            <a href="#" className="social-login__icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-login__icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-login__icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>
    </div>
  );
};

export default Rform;
