import React from "react";
import Navbar from "../../components/nav-bar";
import ManholeBanner from "./fragments/manhole-banner";
import classNames from "classnames/bind";
import styles from "./manhole-page.module.scss";
import ManholeIntroduction from './fragments/manhole-introduction/index';
import useLogic from './use-logic';
import Footer from './../../components/footer/index';
const ManholePage = () => {
  const ss = classNames.bind(styles);
const logic = useLogic();
  return (
    <div>
      <Navbar.Auto />
      <ManholeBanner />
      <ManholeIntroduction logic={logic}/>
      <Footer/>
    </div>
  );
};

export default ManholePage;
