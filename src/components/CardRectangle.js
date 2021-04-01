import React from "react";
import "./style/card-rectangle.css";

const CardRectangle = ({ image, title }) => {
  return (
    <>
      <div
        className="card-rectangle"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          width: "90%",
        }}
      >
        <div className="card-box base">
          <h3 className="base title-rectangle">{title ? title : null}</h3>
        </div>
      </div>
    </>
  );
};

export default CardRectangle;
