import React, { useState, useEffect } from "react";
import "./style/products.css";
import { CardProduct } from "../components";
import { Container } from "semantic-ui-react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/services`)
      .then(({ data }) => {
        console.log(data);
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(services);

  return (
    <>
      <Container>
        <div className="heading-products">
          <section className="box">
            <h2>Services</h2>
            <p className="red subtitle">What we can do for you</p>
          </section>
          <button className="button-red bold">View All</button>
        </div>
        <section className="card-container">
          {services
            ? services.map((val, id) => {
                return (
                  <>
                    <CardProduct key={id} data={val} />
                  </>
                );
              })
            : null}
        </section>
      </Container>
    </>
  );
};

export default Services;
