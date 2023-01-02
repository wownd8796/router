import React from "react";
import { Link } from "react-router-dom";
import Sub2 from "./Sub2";

const Main = () => {
  return (
    <div>
      Main
      <br />
      <Link to="/Sub1">Sub1 컴포넌트로 이동</Link> <br />
      <Sub2></Sub2>
    </div>
  );
};

export default Main;
