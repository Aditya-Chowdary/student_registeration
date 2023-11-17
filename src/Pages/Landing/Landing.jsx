import React from "react";
import Navbar from "../Navbar/Navbar";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Support from "../../Assets/Images/contact-us.svg";
import card1 from "../../Assets/Images/24-hours.png";
import card2 from "../../Assets/Images/project.png";

function Landing() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", paddingTop: "5vh" }}>
        <Image src={Support} />
      </div>
      
    </div>
  );
}

export default Landing;
