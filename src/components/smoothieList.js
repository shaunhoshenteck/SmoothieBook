import React, { useContext } from "react";
import { MyContext } from "../context/";

const SmoothieList = () => {
  const context = useContext(MyContext);
  return <>{console.log(context)}</>;
};

export default SmoothieList;
