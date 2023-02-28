import React from "react";
import Navbar from "./../../components/nav-bar";
import classNames from "classnames/bind";
import styles from "./travel-page.module.scss";
import useLogic from "./use-logic";
import TravelBanner from "./fragments/travel-banner/";
import TravelContents from "./fragments/travel-contents";
import MediaModal from "../../modals/media-modal";

const TravelPage = () => {
  const logic = useLogic();
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <Navbar />
      <TravelBanner />
      <TravelContents logic={logic} />
      <MediaModal
        isOpen={logic.isMediaModalOpen}
        onRequestClose={() => logic.setIsMediaModalOpen(false)}
        logic={logic}
      />
    </div>
  );
};

export default TravelPage;

/*

* components: 재사용 가능, 비교적 순수함(logic이 없음)

* pages: 페이지 하나를 지칭, 로직이 포함되어 있음

* modal: 재사용 가능, 로직이 포함되어 있음(없는 경우도 가끔 있는데, 보통 로직을 포함)

components >>>>>>> modal > page

가장 의존성이 적게 개발하는 방법 => 페이지를 수정했을 때 모달은 수정을 안 해도 되면 좋은 설계다

modal =>
1. 본인의 로직이 있음
2. 초기값만 받고, 이후 상태는 알아서 해결


// 1
const ModalA = ({ places }) => {
  return (<div>
    {places.map(...)}
  </div>);
};

// 2
const ModalA = ({ initialPlaces, onSubmit }) => {
  const [places, setPlaces] = useState(initialPlaces);

  const addPlace = () => {
    setPlaces([...place, {id: uuid(), name: ''}]);
  };
  
  return (<div>
    {places.map(...)}
    <button onClick={onSubmit}>Submit</button>
  </div>);
};

// 3
const ModalA = ({ }) => {
  const [places, setPlaces] = useState(undefined);

  useEffect(...)
  
  return (<div>
    {places.map(...)}
  </div>);
};


*/
