import "semantic-ui-css/semantic.min.css";
import React from "react";
import { CardRectangle } from "../components";
import { Container } from "semantic-ui-react";
import Slider from "infinite-react-carousel";

import worksImage1 from "../images/v691_2366.png";
import worksImage2 from "../images/v691_2372.png";
import worksImage3 from "../images/v733_1558.png";

const OurWorks = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid">
        <h1>OUR WORKS </h1>
        <h1>OUR WORKS </h1>
        <h1>OUR WORKS </h1>
        <h1>OUR WORKS </h1>
      </div>

      <Container className="container-slider">
        <Slider {...settings}>
          <CardRectangle image={worksImage1} title="Bali United Festival" />
          <CardRectangle image={worksImage2} title="Rexona Man Soccer Stars" />
          <CardRectangle image={worksImage3} title="New Indomie Variant" />
          <CardRectangle image={worksImage2} title="Bali United Festival" />
          <CardRectangle image={worksImage1} title="Bali United Festival" />
        </Slider>
      </Container>
    </>
  );
};

export default OurWorks;
