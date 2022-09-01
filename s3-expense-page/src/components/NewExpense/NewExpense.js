import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const formVisibilityHandler = () => {
    setFormVisibility(!formVisibility);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    formVisibilityHandler();
    props.onAddExpense(expenseData); // we can access the function defined in the parent component because the function pointer is passed in
  };

  if (!formVisibility) {
    return (
      <div className="new-expense">
        <button type="submit" onClick={formVisibilityHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        visibility={formVisibilityHandler}
      />
    </div>
  ); // so the child component can use the function onSaveExpenseDataHandler defined in this file
};

export default NewExpense;
