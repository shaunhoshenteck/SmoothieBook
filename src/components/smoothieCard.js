import React, { useContext } from "react";
import { MyContext } from "../context/";
import { Card, Button } from "react-bootstrap";
import smoothieImg from "../smoothie-1.png";
import smoothieImg2 from "../smoothie-2.jpg";
import smoothieImg3 from "../smoothie-3.jpg";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const imgArray = [smoothieImg, smoothieImg2, smoothieImg3];

const SmoothieCard = (props) => {
  const context = useContext(MyContext);
  const history = useHistory();

  const routeChange = () => {
    let path = `/smoothieDetail/?id=${props.id}&name=${props.name}`;
    history.push(path);
  };

  return (
    <Card
      className="m-3 shadow smoothie-card"
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
        src={imgArray[`${props.imageNum}`]}
      />
      <Card.Body className="d-flex flex-column justify-content-start">
        <Card.Title className="text-center" style={{ fontWeight: "bold" }}>
          {props.name}
        </Card.Title>
        <Card.Text className="text-center" style={{ fontSize: "1em" }}>
          {props.cardDescription}
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between">
        <Button
          onClick={() => routeChange()}
          style={{ width: "70%" }}
          className="mr-1 mt-3 mb-3 ml-3"
          variant="primary"
        >
          Update Smoothie
        </Button>
        <div
          onClick={() => context.deleteSmoothie(props.id)}
          className="mr-3 btn btn-danger m-auto"
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
      </div>
    </Card>
  );
};

export default SmoothieCard;
