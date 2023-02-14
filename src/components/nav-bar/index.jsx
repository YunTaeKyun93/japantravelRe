import React from "react";
import styles from "./nav-bar.module.scss";
import classNames from "classnames/bind";
import LogoBlackImg from "./../logo-black/index";
const Navbar = ({ scrollDir }) => {
  const ss = classNames.bind(styles);

  return (
    <div
      className={ss(
        `${scrollDir === "scrolling down" ? "down-wrapper" : "wrapper"}`
      )}
    >
      <div className={ss("navbar-container")}>
        <div className={ss("menu-container")}>
          {scrollDir === "scrolling down" && (
            <LogoBlackImg style={{ width: "200px", cursor: "pointer" }} />
          )}

          {scrollDir === "scrolling up" && <div className={ss("block")}></div>}
          <div className={ss("menu-list")}>
            <span>About</span>
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
