import React from "react";
import Modal from "react-modal";
import RelatedPlaceInfo from "../fragments/related-place-info/index";
import classNames from "classnames/bind";
import styles from "./media-modal.module.scss";
Modal.setAppElement("#root");

const MediaModal = ({ isOpen, onRequestClose, place, relatedPlace }) => {
  const ss = classNames.bind(styles);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={ss("wrapper")}
    >
      {place != null && relatedPlace != null && (
        <RelatedPlaceInfo
          place={place}
          relatedPlace={relatedPlace}
          onRequestClose={onRequestClose}
        />
      )}
    </Modal>
  );
};

/*

const [name, setName] = useState("");
const [age, setAge] = useState(12);

const [state, setState] = useState({
  name: "",
  age: 12,
});

const someFn = () => {
  setName("Jack");
  setAge(24);
};

name = "", age = 24
name = "Jack", age = 12

name = "Jack", age = 24


isModalOpen,
place

setIsModalOpen(true);
setPlace(newPlace);



const someFn = () => {
  setState({
    name: "Jack",
    age: 24,
  });
}
}


const [mediaModalParams, setMediaModalParams] = useState(undefined);

setMediaModalParams({
  place: newPlace,
  relatedPlace: newRelatedPlace,
});

setMediaModalParams(undefined);

return {
  isMediaModalOpen: mediaModalParams != null,
  mediaModalPlace: mediaModalParams?.place,
  mediaModalRelatedPlace: mediaModalParams?.relatedPlace,
  openMediaModal: ({place, relatedPlace}) => {
    setMediaModalParams({place, relatedPlace});
  },
  closeMediaModal: () => {
    setMediaModalParams(undefined);
  }
}

*/

export default MediaModal;
