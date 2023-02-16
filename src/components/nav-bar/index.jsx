import React from "react";
import styles from "./nav-bar.module.scss";
import classNames from "classnames/bind";
import LogoBlackImg from "./../logo-black/index";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollDir, currentPage }) => {
  const ss = classNames.bind(styles);
  const navigator = useNavigate();
  return (
    <div
      className={ss(
        `${scrollDir === "scrolling down" ? "down-wrapper" : "wrapper"}`
        // `${currentPage !== `/` && "down-wrapper"}`
      )}
    >
      <div className={ss("navbar-container")}>
        <div className={ss("menu-container")}>
          {scrollDir === "scrolling down" && (
            <LogoBlackImg
              onClick={() => navigator("/")}
              style={{ width: "200px", cursor: "pointer" }}
            />
          )}

          {scrollDir === "scrolling up" && <div className={ss("block")}></div>}
          <div className={ss("menu-list")}>
            <span onClick={() => navigator("/about")}>About</span>
            <span>Travel</span>
          </div>
        </div>
        <div className={ss("service-container")}>
          <div className={ss("menu-list")}>
            <span>Sign In</span>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
