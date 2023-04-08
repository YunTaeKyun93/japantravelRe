import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./mobile-nav-bar.module.scss";
import { useNavigate } from "react-router-dom";

const ss = classNames.bind(styles);

const MobileNavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const navigator = useNavigate();
  useEffect(() => {
    document.addEventListener("touchstart", () => {}, true);
  }, []);
  return (
    <div className={ss("hamburger-menu")}>
      <div
        className={ss("hamburger-icon")}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={ss("menu-items", { open: isActive })}>
        <div className={ss("menu-list")}>
          <ul>
            <li>
              <span data-text="&nbsp;Home" onClick={() => navigator("/")}>
              &nbsp;Home&nbsp;
              </span>
            </li>
            <li>
        
              <span data-text="&nbsp;About" onClick={() => navigator("/about")}>
              &nbsp;About&nbsp;
              </span>
            </li>
            <li>
     
              <span data-text="&nbsp;Travel" onClick={() => navigator("/travel")}>
              &nbsp;Travel&nbsp;
              </span>
            </li>
            <li>
      
              <span data-text="&nbsp;Manhole" onClick={() => navigator("/manholes")}>
              &nbsp;Manhole&nbsp;
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
