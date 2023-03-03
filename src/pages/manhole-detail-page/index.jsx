import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useLogic from "./use-logic";
import Navbar from "../../components/nav-bar";
import classNames from "classnames/bind";
import styles from "./manhole-detail.module.scss";
import ImageComponent from "./../../components/image/index";
import { ImLocation2 } from "react-icons/im";
import Footer from "./../../components/footer/index";

const ManholeDetail = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();
  if (logic.isManholeLoading) {
    return (
      <ClipLoader color="blue" loading={logic.isManholeLoading} size={350} />
    );
  }
  const currentManhole = logic.currentManhole;
  console.log({ currentManhole });
  return (
    <div className={ss("wrapper")}>
      <Navbar.Auto />
      <ImageComponent
        url={currentManhole.bannerImage.imageUrl}
        className={ss("banner-image")}
      />
      <div className={ss("manhole-container")}>
        <div className={ss("manhole-info")}>
          <h1>{currentManhole.name}</h1>
          <h2>{currentManhole.jpName}</h2>
          <span>
            <ImLocation2 />
            {currentManhole.address}
          </span>
        </div>
      </div>
      <div className={ss("detail-container")}>
        <p>{currentManhole.description}</p>
        <div className={ss("image-container")}>
          {currentManhole.images?.map((image) => (
            <ImageComponent url={image.imageUrl} className={ss("image-item")} />
          ))}
        </div>
        <p>{currentManhole?.description2}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ManholeDetail;
