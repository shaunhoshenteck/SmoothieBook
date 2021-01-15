import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/";
import { Container, Row, Col } from "react-bootstrap";
import SmoothieCard from "./smoothieCard";
import Paginations from "./Paginations";

const SmoothieList = () => {
  const context = useContext(MyContext);
  const { smoothies } = context;
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState([]);

  const setPage = (pageNum) => {
    setCurrPage(pageNum);
  };

  const calculateTotalPages = (totalItems, itemsPerPage) => {
    const pages = Math.floor(totalItems / itemsPerPage) + 1;
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

  useEffect(() => {
    console.log("USE EFFECT 1");
    setCurrPage(1);
    calculateTotalPages(smoothies.length, 6);
    getResults();
  }, []);

  useEffect(() => {
    console.log("USE EFFECT 2");
    calculateTotalPages(smoothies.length, 6);
    getResults();
  }, [currPage]);

  useEffect(() => {
    console.log("USE EFFECT 3");
    calculateTotalPages(smoothies.length, 6);
    getResults();
  }, [smoothies]);

  return (
    <>
      <Container>
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
                  />
                </Col>
              );
            })
          ) : (
            <h3>Sorry, no smoothie recipes are available</h3>
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
