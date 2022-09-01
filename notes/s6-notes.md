# Update state based on previous state
```
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); // add new element to the array as the first element
    console.log("function called");
  };
```

We should add unique identifier key to every list items so react know the items are different. 

# styled-components
Only affects the style that we set up for a component.
https://styled-components.com/

# CSS modules