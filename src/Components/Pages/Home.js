import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Formm from "../Form/Form";
import Offer from "../Offer/Offer";
import { ToastContainer } from "react-toastify";
import Navbarr from "../Navbar/Navbar";
import Fcorrosel from "../Fcorrosel/Fcorrosel";
import "./Home.scss";
import CommentBox from "../CommentBox/CommentBox";
import ProductSalesChart from "../ProductSalesChart/ProductSalesChart";
import Footer from "../Footer/Footer";
import Offerbtn from "../Offerbtn/Offerbtn";
import Login from "../Login/Login";
import Table from "../Table/Table";

const Home = () => {
  return (
    <div className="dddd">
      <Navbarr />
      <Banner />
      <About />
      <Fcorrosel />
      <Offer />
      <Formm />
      <ToastContainer />
      <Footer/>
      {/* <Banner/> */}
   
    </div>
  );
};

export default Home;
