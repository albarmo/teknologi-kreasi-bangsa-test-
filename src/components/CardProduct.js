import React from "react";
import "./style/card-proudct.css";

const CardProduct = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="card">
        <div
          className="card-box base"
          style={{
            backgroundImage: `url(http://localhost:3001${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <h3 className="base title">{data ? data.name : null}</h3>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
