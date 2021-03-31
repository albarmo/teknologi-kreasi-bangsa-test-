import React, { useEffect, useState } from "react";
import { Button, Jumbotron } from "../components";
import { Container, Divider } from "semantic-ui-react";
import "./style/home.css";
import "semantic-ui-css/semantic.min.css";

import signature from "../images/v502_1719.png";

const Home = () => {
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
    </>
  );
};

export default Home;
