import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{ width: "100%", height: "400px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="footer d-flex justify-content-evenly">
            {/* website */}
          <div className="website" style={{ width: "400px" }}>
            <h5>E-cart</h5>
            <h6>Organization</h6>
            <i className="fa-solid fa-video fa-bounce"></i>
          </div>
          {/* links */}
          <div className="links d-flex flex-column" style={{ width: "400px" }}>
            <h5>Links</h5>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Landingpage
            </Link>
            <Link
              to="/homepage"
              style={{ textDecoration: "none", color: "black" }}
            >
              HomePage
            </Link>
            <Link
              to="watchhistory"
              style={{ textDecoration: "none", color: "black" }}
            >
              WatchHistory
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Volume Licensing
            </Link>
          </div>
          {/* Guids */}
          <div className="links d-flex flex-column" style={{ width: "250px" }}>
            <h5>Guids</h5>
            <Link to="https://react.dev/" style={{ textDecoration: "none", color: "black" }}>
              React
            </Link>
            <Link
              to="/https://react-bootstrap.netlify.app/"
              style={{ textDecoration: "none", color: "black" }}
            >
              React Boostrap
            </Link>
            <Link
              to="https://fontawesome.com/"
              style={{ textDecoration: "none", color: "black" }}
            >
              Font awesome
            </Link>
          </div>
        </div>
      </div>
      <p style={{textAlign:'center'}}>Copyright © 2023 E-cart. Built with React.</p>
    </>
  );
}

export default Footer;
