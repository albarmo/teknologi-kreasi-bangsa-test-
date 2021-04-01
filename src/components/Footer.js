import React from "react";
import "./style/footer.css";
import Image from "../images/v502_768.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="box-footer">
          <img
            src={Image}
            alt="footer logo"
            width="100px"
            height="100px"
            className="color-reverse"
            style={{ marginBottom: "20px" }}
          />
          <p className="body-regular left bolder base">
            UNITED CREATIVE HEAD OFFICE
          </p>
          <p className="body-small left">
            Wisma Bali United, Jalan Panjang No.29 Kedoya Selatan, Jakarta Barat
            (021) 12345678
          </p>
        </div>
        <div className="box-footer body-small">
          <p>Product</p>
          <p>Service</p>
          <p>Works</p>
          <p>Client</p>
        </div>
        <div className="box-footer">
          <p>About</p>
          <p>Contact Us</p>
          <p>Career</p>
        </div>
        <div className="box-footer last">
          <img
            src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png"
            alt="footer logo"
            width="50px"
            height="50px"
            className="color-reverse"
            style={{ marginBottom: "20px" }}
          />
          <p>COPYRIGHT @2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
