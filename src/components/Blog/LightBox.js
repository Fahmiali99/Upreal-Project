import React from "react";
import data from "../assets/LightBox/images.json";
// import React, { useState } from "react";
import Modal from "./Modal";
import { useState } from "react";

function LightBox() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="LightBox">
      <div className="wrapper">
        {data.data.map((item, index) => (
          <div key={index} className="wrapper-images">
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handelClick(item, index)}
            />
            <h2>{item.text}</h2>
          </div>
        ))}
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
          />
        )}
      </div>
    </div>
  );
}

export default LightBox;
