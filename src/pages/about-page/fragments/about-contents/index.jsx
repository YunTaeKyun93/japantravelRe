import React from "react";
import classNames from "classnames/bind";
import styles from "./about-contents.module.scss";
import AboutContentImg1 from "./../../../../components/about-content-img/index";

const AboutContents = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("contents-container")}>
        <div className={ss("contents")}>
          <div className={ss("content1")}>
            <div>
              <h3>코로나와 애니메이션</h3>
              <p>
                2020년, 코로나 팬데믹으로 우리의 일상이 몇 년간 멈춰있던 당시
              </p>
              <p>
                일본 애니메이션 산업도 방영 연기 & 중단을 하면서 큰 타격을
                받았었는데
              </p>
              <p>
                오히려 국내에서는 넷플릭스나 라프텔등 여러 미디어매체 등을
                접하는 기회가 잦아졌습니다.
              </p>
              <p>
                진격의 거인이 선풍적인 인기몰이를 하면서, 국내에 애니메이션의
                대중화를 한 이후
              </p>
              <p>그 정점을 찍은 애니메이션은 귀멸의 칼날일 것 이다. </p>
              <p>실제로 코로나19로 침체됐던 일본 경제에 활기를 불어 넣었다.</p>
              <p>
                극장판으로 개봉한 "귀멸의 칼날:무한열차편"은 개봉 10일 만에
                흥행수입 최단기 기록을 세웠다.
              </p>
              <p>
                또한 YouTube, 인스타 등 여러 매체에서도 패러디 등을 하면서
                국내에서도 입소문이 빠르게 퍼져나갔다.
              </p>
              <p>
                그러다보니, 자연스럽게 여러 애니메이션을 접하면서 예전의
                오타쿠들만의 취미가 아닌
              </p>
              <p>일반 대중들에게도 평범한 취미가 되었다.</p>
            </div>
            <AboutContentImg1 style={{ width: "300px" }} />
          </div>
          <div className={ss('content1')}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContents;

