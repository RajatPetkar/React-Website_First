import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../component/img/rrr.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common
        id= 'header'
        link='/'
        title="Grow your Business with"
        name = 'Rajat'
        sub='we are the team of talented developer making websites'
        btn = 'Get Started'
        img = {web}
    />
    </>
  );
};

export default Home;
