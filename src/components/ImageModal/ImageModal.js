import React from "react";
import "./style.css";

const ImageModal = ({ src, alt, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={src} alt={alt} />
        <div id="caption">{alt}</div>
      </div>
    </div>
  );
};

export default ImageModal;
