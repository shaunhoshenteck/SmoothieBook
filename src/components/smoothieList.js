import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SmoothieCard from "./smoothieCard";
import Paginations from "./Paginations";

const SmoothieList = () => {
  const context = useContext(MyContext);
  const { smoothies } = context.state;
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filterOn, setFilterOn] = useState(false);

  const setPage = (pageNum) => {
    setCurrPage(pageNum);
  };

  const calculateTotalPages = (totalItems, itemsPerPage) => {
    const pages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(pages);
  };

  const paginate = (array, page_size, page_number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const getResults = () => {
    const res = paginate(smoothies, 6, currPage);
    setResults(res);
  };

  const filterResults = (word) => {
    if (!word) return;
    console.log(word);
    const filteredArr = smoothies.filter((smoothie) => {
      return smoothie.name.includes(word);
    });

    calculateTotalPages(filteredArr.length, 6);
    setCurrPage(1);
    const res = paginate(filteredArr, 6, currPage);
    setResults(res);
    setFilterOn(true);
  };

  const resetFilter = () => {
    setFilterOn(false);
    setCurrPage(1);
    getResults();
    calculateTotalPages(smoothies.length, 6);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      filterResults(searchWord);
    }
  };

  const onchangeHandler = (e) => {
    setSearchWord(e.target.value);
  };

  const selectRandomNum = () => {
    return Math.floor(Math.random() * 3);
  };

  useEffect(() => {
    console.log("USE EFFECT 2");
    getResults();
    calculateTotalPages(smoothies.length, 6);
  }, [currPage]);

  useEffect(() => {
    console.log("USE EFFECT 3");
    getResults();
    calculateTotalPages(smoothies.length, 6);
  }, [smoothies.length]);

  return (
    <>
      <Container>
        <Row className="flex flex-column justify-content-center align-items-center mt-3 mb-3">
          <h1>Your Smoothies</h1>
          <Form inline onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              onChange={onchangeHandler}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onKeyPress={handleKeypress}
            />
            <Button
              onClick={() => {
                filterResults(searchWord);
              }}
              variant="outline-info"
            >
              Search
            </Button>{" "}
            {filterOn ? (
              <Button
                onClick={() => resetFilter()}
                className="ml-3 btn btn-danger"
              >
                Reset Filter
              </Button>
            ) : null}
          </Form>
        </Row>
        <Row className="flex align-content-center">
          {results.length > 0 ? (
            results.map((smoothie, i) => {
              return (
                <Col key={smoothie.id} sm="8" md="6" lg="4">
                  <SmoothieCard
                    name={smoothie.name}
                    id={smoothie.id}
                    image={Math.floor(i % 3)}
                    description={smoothie.description}
                    randomNum={selectRandomNum()}
                  />
                </Col>
              );
            })
          ) : (
            <h3>Sorry, no smoothie recipes are available on this page!</h3>
          )}
        </Row>
        <Row className="justify-content-center">
          <Paginations
            handleChange={setPage}
            count={totalPages}
            currPage={currPage}
          ></Paginations>
        </Row>
      </Container>
    </>
  );
};

export default SmoothieList;
