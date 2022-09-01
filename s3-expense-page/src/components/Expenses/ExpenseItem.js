import React, { useState } from "react"; // import useSate hook
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // the function with the initial value will load for every instance of the component
  const [title, setTitle] = useState(props.title);
  // useState needs an initial state value
  // useState returns an array of two element
  // the first element in [] is the pointer to the default value / returned value of useState
  // the second element in [] is the change state function

  const clickHandler = () => {
    setTitle("Updated!"); // effectuate only in the specific instance of the component, whose button is clicked
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
