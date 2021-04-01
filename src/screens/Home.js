import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import {
  CardProduct,
  Jumbotron,
  SliderFluid,
  CardRectangle,
  Footer,
  Products,
  Services,
  OurWorks,
  Clients,
} from "../components";
import { Container, Divider } from "semantic-ui-react";
import "./style/home.css";
import { Grid, Image } from "semantic-ui-react";
import signature from "../images/v502_1719.png";
import Slider from "infinite-react-carousel";

const Home = () => {
  var settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Jumbotron key="1" />
      <Container>
        <p className="text body-reguler">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. <span className="red bold">Aenean massa strong </span>
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
          consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
          viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
          varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
          vel augue. <span className="red bold">Curabitur ullamcorper</span>
          ultricies nisi.
        </p>
        <section className="signature-image">
          <p className="body-regular">Warm Regrads,</p>
          <img src={signature} alt="signature" />
        </section>
        <Divider />
      </Container>

      <Products />

      <div className="container-fluid">
        <h1>WHAT MAKE US DIFFERENT </h1>
        <h1>WHAT MAKE US DIFFERENT </h1>
      </div>

      <Container>
        <Divider />
        <Divider />
      </Container>

      <SliderFluid />
      <Services />

      <Container>
        <Divider />
        <Divider />
      </Container>

      <OurWorks />

      <Clients />

      <Container>
        <div className="project">
          <p>Lets Create </p>
          <section className="underline">
            <p>Creative Project</p>
            <p className="shape"></p>
          </section>
        </div>
        <button className="button-red bold">START PROJECT WITH US</button>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
