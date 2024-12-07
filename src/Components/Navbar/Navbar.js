import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.scss";

const Navbarr = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // isAuthenticated && (
      <div className="nnn">
        <Navbar className="navbargym" variant="dark" expand="lg">
          <Container>
            <div className="imgnav">
              <img src={logo} alt="" />
            </div>
            <Navbar.Toggle
              onClick={toggleNavbar} // Handle click to open/close the menu
              aria-controls="responsive-navbar-nav"
            >
              <FaBars /> {/* Hamburger icon */}
            </Navbar.Toggle>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={isOpen ? "show" : ""}
            >
              <Nav className="ml-auto">
                <Link
                  duration={50}
                  smooth={true}
                  to={"/"}
                  className="a"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsOpen(false); // Close the menu
                  }}
                >
                  HOME
                </Link>
                <Scrolllink
                  duration={50}
                  smooth={true}
                  className="a"
                  to={"feature"}
                >
                  FEATURES
                </Scrolllink>
                <Scrolllink
                  duration={50}
                  smooth={true}
                  className="a"
                  to={"Offer"}
                >
                  OFFER
                </Scrolllink>
                <Scrolllink
                  duration={50}
                  smooth={true}
                  className="a"
                  to={"About"}
                >
                  ABOUT
                </Scrolllink>
                <Link className="a" to={"/Services"}>
                  SERVICES
                </Link>
                <Link className="a" to={"/Coaches"}>
                  COACHES
                </Link>
                <Scrolllink
                  duration={50}
                  smooth={true}
                  className="a"
                  to={"Contact"}
                >
                  CONTACT
                </Scrolllink>{" "}
                <Link
                  duration={50}
                  smooth={true}
                  to={"/"}
                  className="a"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LOG OUT
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    // )
  );
};

export default Navbarr;
