import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // mutiple states can be used for one component
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  

  // use an array for intial value, so only one state is used.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // react will make sure when the change occurs we get the event object
    setEnteredTitle(event.target.value);

    // userInput({ ...userInput, enteredTitle: event.target.value }); // event.target.value is the value entered by the user; now by using this funciton, the value is saved as enteredTitle variable

    // if there are a lot of states in the same time, this method below will guarantee latest state snapshot.
    // userInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle, 
      amount: +enteredAmount, // this will force conversion from string to number
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); // we can access the function because we have passed in the function pointer
    // clear input upon submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }; // submitHandler is used so that the page will not refresh, but will update according to the function, whene the user submit the form

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2012-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.visibility}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
