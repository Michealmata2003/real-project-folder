import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdNotifications, MdSettings } from "react-icons/md";
import Swal from "sweetalert2";
import "./Styles/movienav.css";
import { UserAuth } from "../../LandingPage/Components/AuthContext";

function MovieNavbar() {
  const showAlert = () => {
    Swal.fire({
      title: "Note",
      text: "Movies would be updated Regularly",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const { LogOut } = UserAuth();
  const [showNav, setShowNav] = useState(false);
  // const  [showNotifications, setShowNotifications] = useState();
  useEffect(() => {
    const handleDropNav = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleDropNav);
    return () => {
      window.removeEventListener("scroll", handleDropNav);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`full-page ${showNav && "dropping-me"}`}>
      <div className="container">
        <div className="nav">
          <div className="winrar">
            <ul>
              <li>
                <NavLink className="logo" to="/">
                  Texa<span>Stream</span>
                </NavLink>
              </li>
            </ul>
            
          </div>
          <ul className="last-ul">
            <NavLink to="/search">
              <BiSearch />
            </NavLink>
            {/* <NavLink to="/"> */}
              <MdNotifications onClick={showAlert} />
            {/* </NavLink> */}
            <NavLink className="settings" to="/">
              <MdSettings />
            </NavLink>
            <div>
              <BsFillPersonFill onClick={handleSignOut} className="avatar" />
              <div className="indicate-out">
                <p>click to sign out</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="MdNotifications"></div>
    </div>
  );
}

export default MovieNavbar;
// AIzaSyBLya3bJWngU0n1Hr81I53_7-P08cR3eFs
