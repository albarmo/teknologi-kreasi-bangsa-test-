import React from "react";
import { Button } from "../components";
import "./style/Jumbotron.css";

const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="jumbotron-text base">
          <h1>
            28 MILLION<br></br>COMMUNITY
          </h1>
          <Button text="LETS WORK WITH US" />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
