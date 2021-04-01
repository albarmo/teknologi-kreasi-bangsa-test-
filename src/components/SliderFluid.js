import React from "react";
import { Button } from "../components";
import "./style/products.css";
import { CardSlider } from "../components";
import Slider from "infinite-react-carousel";

const SliderFluid = () => {
  return (
    <>
      <div className="container-slider">
        <Slider>
          <CardSlider />
          <CardSlider />
          <CardSlider />
        </Slider>
      </div>
    </>
  );
};

export default SliderFluid;
