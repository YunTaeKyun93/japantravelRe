import React from "react";
import classNames from "classnames/bind";
import styles from "./manhole-banner.module.scss";
import ManholeBannerImg from "./../../../../components/manhole-banner/index";
const ManholeBanner = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <ManholeBannerImg className={ss('banner-image')}/>
    </div>
  );
};

export default ManholeBanner;
