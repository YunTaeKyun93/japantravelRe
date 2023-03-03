import React from "react";
import styles from "./manhole-introduction.module.scss";
import classNames from "classnames/bind";
import ClipLoader from "react-spinners/ClipLoader";
import ManholeListImg from "./../../../../components/manhole-list-img/index";

const ManholeIntroduction = ({ logic }) => {
  const ss = classNames.bind(styles);
  if (logic.isManholesLoading) {
    return (
      <ClipLoader color="blue" loading={logic.isManholesLoading} size={350} />
    );
  }
  const manholes = logic.manholes;
  return (
    <div className={ss("wrapper")}>
      <div className={ss("introduction-container")}>
        <h1>도쿄! 맨홀 뚜껑에 애니메이션을 입히다.</h1>
        <div className={ss("manhole-list-container")}>
          {manholes.map((manhole) => (
            <div
              key={manhole.name}
              className={ss("manhole-list")}
              onClick={() => {
                logic.navigator(`/manhole/${manhole._id}`);
              }}
            >
              <ManholeListImg
                url={manhole.bannerImage.imageUrl}
                className={ss("manhole-list-image")}
              />
              <div className={ss("manhole-name")}>
                <span>{manhole.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManholeIntroduction;
