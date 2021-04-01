import React from "react";
import "./style/card-slider.css";
import Image from "../images/v502_1483.png";

const CardSlider = () => {
  return (
    <>
      <div className="card-slider">
        <div className="overlay-text">
          <h1>1000</h1> <br></br>
          <h2>Comunity Leader</h2>
        </div>
        <img
          src={Image}
          alt="product"
          width="120px"
          className="card-slider-image"
        />
        <div className="card-slider-text black">
          <p className="black">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
