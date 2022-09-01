import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(); // useCounter returns the counter

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
