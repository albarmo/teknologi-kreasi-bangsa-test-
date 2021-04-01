import "semantic-ui-css/semantic.min.css";
import React from "react";
import { OurWorks } from "../components";
import { Container } from "semantic-ui-react";
import { Grid, Image } from "semantic-ui-react";
import Slider from "infinite-react-carousel";

const Clients = () => {
  var settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container>
        <div className="heading-products">
          <section className="box">
            <h2>Client</h2>
            <p className="red subtitle">Our happy client</p>
          </section>
          <button className="button-red bold">View All</button>
        </div>
        <Slider {...settings1}>
          <Grid>
            <Grid.Row columns={7} style={{ marginTop: "20px" }}>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={7} style={{ marginTop: "20px" }}>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={7} style={{ marginTop: "20px" }}>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Slider>
      </Container>
    </>
  );
};

export default Clients;
