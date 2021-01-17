import React, { useState, useContext, useEffect, useRef } from "react";
import {
  ListGroupItem,
  ListGroup,
  Col,
  Row,
  Card,
  Container,
  Button,
  Jumbotron,
  Form,
} from "react-bootstrap";
import { MyContext } from "../context/";
import { useHistory } from "react-router-dom";

const SmoothieDetails = () => {
  const inputRef = useRef();
  const inputRefDescription = useRef();
  const params = useHistory();
  const context = useContext(MyContext);
  const [currSmoothie, setCurrSmoothie] = useState({
    name: "",
    id: "",
    description: "",
    ingredients: "",
    ingredientsArr: [],
  });

  const [currIngredient, setcurrIngredient] = useState("");
  const [currDescription, setCurrDescription] = useState("");

  const getCurrSmoothie = () => {
    const id = new URLSearchParams(params.location.search).get("id");
    context.state.smoothies.forEach((smoothie) => {
      if (id === smoothie.id) {
        const copy = { ...smoothie };
        setCurrSmoothie(copy);
      }
    });
  };

  const onChangeHandlerDescription = (e) => {
    setCurrDescription(e.target.value);
  };

  const onChangeHandlerIngredients = (e) => {
    setcurrIngredient(e.target.value);
  };

  const addToIngredients = (id, val) => {
    if (!val) return;
    context.addIngredient(id, val);
    inputRef.current.value = "";
  };

  const editDescription = (id, val) => {
    if (!val) return;
    context.editDescription(id, val);
    inputRefDescription.current.value = "";
  };

  useEffect(() => {
    getCurrSmoothie();
  }, [context.state.smoothies]);

  useEffect(() => {
    getCurrSmoothie();
  }, []);

  return (
    <Container>
      <Jumbotron
        className="mt-3 shadow text-center"
        style={{ backgroundColor: "#faf8f8" }}
      >
        <h1>{currSmoothie.name}</h1>
      </Jumbotron>
      <Row>
        <Col className="col-md-8 col-sm-6">
          <Card className="shadow" style={{ height: "25em" }}>
            <Card.Header as="h5">Description</Card.Header>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Describe Your Smoothie!</Card.Title>
                <Card.Text>{currSmoothie.description}</Card.Text>
              </div>
              <div>
                <Form.Control
                  onChange={onChangeHandlerDescription}
                  type="text"
                  placeholder="Edit current description"
                  ref={inputRefDescription}
                />
                <Button
                  className="mt-3"
                  variant="primary"
                  style={{ width: "200px", height: "40px" }}
                  onClick={() => {
                    editDescription(currSmoothie.id, currDescription);
                  }}
                >
                  Edit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-4 col-sm-6">
          <Card>
            <Card.Body>
              <Card.Title>Ingredients</Card.Title>
              <Card.Text>
                Here are the ingredients that make up this smoothie
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {currSmoothie.ingredientsArr.length > 0
                ? currSmoothie.ingredientsArr.map((item, idx) => {
                    return (
                      <ListGroupItem
                        className="d-flex justify-content-between align-items-center"
                        key={idx}
                      >
                        {item}
                        <span
                          onClick={() =>
                            context.deleteIngredient(currSmoothie.id, idx)
                          }
                          className="badge badge-danger"
                        >
                          x
                        </span>
                      </ListGroupItem>
                    );
                  })
                : null}
            </ListGroup>
            <Card.Body>
              <Form.Group>
                <Form.Control
                  onChange={onChangeHandlerIngredients}
                  type="text"
                  ref={inputRef}
                />
                <Button
                  onClick={() =>
                    addToIngredients(currSmoothie.id, currIngredient)
                  }
                  type="submit"
                  className="mt-4"
                  variant="primary"
                >
                  Add Ingredients
                </Button>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SmoothieDetails;
