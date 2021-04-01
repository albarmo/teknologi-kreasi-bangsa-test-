import React, { useEffect, useState } from "react";
import "./style/products.css";
import { CardProduct } from "../components";
import { Container } from "semantic-ui-react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container>
        <div className="heading-products">
          <section className="box">
            <h2>Product</h2>
            <p className="red subtitle">What we can do for you</p>
          </section>
          <button className="button-red bold">View All</button>
        </div>
        <section className="card-container">
          {products
            ? products.map((val, id) => {
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

export default Products;
