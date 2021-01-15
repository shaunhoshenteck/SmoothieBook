import React, { useContext, useState } from "react";
import { MyContext } from "../context/";
import { Card, Button } from "react-bootstrap";
import smoothieImg from "../smoothie-1.png";
import smoothieImg2 from "../smoothie-2.jpg";
import smoothieImg3 from "../smoothie-3.jpg";

const imgArray = [smoothieImg, smoothieImg2, smoothieImg3];

const SmoothieCard = (props) => {
  const context = useContext(MyContext);
  const [imgNum, setImgNum] = useState(props.randomNum);

  return (
    <Card
      className="m-3 shadow"
      style={{
        width: "18rem",
        height: "30em",
        borderTopLeftRadius: "0.5em",
        borderTopRightRadius: "0.5em",
      }}
    >
      <Card.Img
        variant="top"
        style={{
          height: "15em",
          objectFit: "cover",
          borderTopLeftRadius: "0.5em",
          borderTopRightRadius: "0.5em",
        }}
        src={imgArray[`${imgNum}`]}
      />
      <Card.Body className="d-flex flex-column justify-content-start">
        <Card.Title className="text-center">{props.name}</Card.Title>
        <Card.Text className="text-center">{props.description}</Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between">
        <Button style={{ width: "70%" }} className="m-3" variant="primary">
          Update Smoothie
        </Button>
        <div
          onClick={() => context.deleteSmoothie(props.id)}
          className="m-auto"
        >
          X
        </div>
      </div>
    </Card>
  );
};

export default SmoothieCard;
