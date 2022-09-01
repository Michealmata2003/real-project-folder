import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
import "./Styles/Navbar.css";
import Swal from "sweetalert2";

const Navbar = () => {



  const { signInWithGoogle, user } = UserAuth();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 8000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  };

  
  useEffect(() => {
    if (user != null) {
      navigate("./movies");
    }
  }, [user]);

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


  return (
    <div className={`full-page ${showNav && "dropping-me"}`}>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink className="logo" to="/">
                Texa<span>Stream</span>
              </NavLink>
            </li>
          </ul>

          <ul className="last-ul">
            <NavLink to="/">
              <button className="signin" onClick={handleGoogleSignIn} >
                Sign In
              </button>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
