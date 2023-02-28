import React from "react";
import Modal from "react-modal";
import RelatedPlaceInfo from "../../pages/travel-page/fragments/related-place-info/index";
import classNames from "classnames/bind";
import styles from "./media-modal.module.scss";
Modal.setAppElement("#root");

const MediaModal = ({ isOpen, onRequestClose, logic }) => {
  const ss = classNames.bind(styles);

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={ss("wrapper")}
    >
      <RelatedPlaceInfo logic={logic} />
    </Modal>

  );
};

export default MediaModal;
