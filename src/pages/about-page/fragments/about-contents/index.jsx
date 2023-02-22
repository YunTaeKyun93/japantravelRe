import React from "react";
import classNames from "classnames/bind";
import styles from "./about-contents.module.scss";
import AboutContentImg1 from "./../../../../components/about-content-img/index";
import AboutContentImg2 from "./../../../../components/about-content-img2/index";
import AboutContentImg3 from "./../../../../components/about-content-img3/index";

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
              <p>그 정점을 찍은 애니메이션은 귀멸의 칼날일 것 입니다. </p>
              <p>
                실제로 코로나19로 침체됐던 일본 경제에 활기를 불어 넣었습니다.
              </p>
              <p>
                극장판으로 개봉한 "귀멸의 칼날:무한열차편"은 개봉 10일 만에
                흥행수입 최단기 기록을 세웠습니다.
              </p>
              <p>
                또한 YouTube, 인스타 등 여러 매체에서도 패러디 등을 하면서
                국내에서도 입소문이 빠르게 퍼져나갔습니다.
              </p>
              <p>
                그러다보니, 자연스럽게 여러 애니메이션을 접하면서 예전의
                오타쿠들만의 취미가 아닌
              </p>
              <p>일반 대중들에게도 평범한 취미가 되었습니다.</p>
            </div>
            <AboutContentImg1 style={{ width: "300px" }} />
          </div>
          <div className={ss("content1")}>
            <AboutContentImg2 style={{ width: "500px", borderRadius: "4px" }} />
            <div>
              <h3>실제 장소와 애니메이션</h3>
              <p>
                애니메이션의 작화는 이제 시청자들이 보게 되는 지표중 하나가 될
                만큼
              </p>
              <p>
                중요한 요소로 작용한게 되었습니다. 멋있는 연출, 멋진 작화 뿐만
                아니라
              </p>
              <p>
                실제 있는 장소를 정말 사진과 똑같이 만들어 낸 작화로 유명한
                애니메이션들이 있는데,
              </p>
              <p>
                우리에게는 "너의 이름은"으로 유명한 신카이 마코토 감독의 작품일
                것 입니다.
              </p>
              <p>
                전작 초속5센티미터부터 실제 장소를 똑같이 그려놓은 작화로
                유명했던 이후
              </p>
              <p>여러 작품에서도 이러한 실사 작화를 그려지기 시작했습니다.</p>
              <p>
                최근에는 실제 사진에 2D작업을 하여 배경을 그리기에 현실의 장소를
              </p>
              <p>배경으로 쓰는 경우가 많아 졌습니다.</p>
            </div>
          </div>
          <div className={ss("content1")}>
            <div>
              <h3>색다른 여행</h3>
              <p>코로나 규제완화로 인해 해외여행을 갈 수 있게 된 지금</p>
              <p>
                흔히 얘기하는 애니메이션 장소 성지순례를 하는 사람이 많아
                졌습니다.
              </p>
              <p>내가 좋아하는 애니메이션의 주인공이 되어, 같은 구도에서</p>
              <p>기념사진을 찍는 것도 재밌는 추억이 될 것 입니다.</p>
              <p>쇼핑, 먹거리, 명소 등의 여행정보는 다른 사이트에도 많지만,</p>
              <p>
                저처럼 애니메이션 명소를 찾는 사람들에게 보다 편하게 찾아 갈 수
              </p>
              <p>있다면 도움이 될 것 같다는 마음에 시작하게 되었습니다.</p>
              <p>그 중에서도 일본의 수도 도쿄의 애니메이션 장소를 제공할 것입니다.</p>
            </div>
            <AboutContentImg3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContents;
