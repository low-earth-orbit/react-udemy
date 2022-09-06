const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}; // reducer function, will be called by the redux library;
//inputs: old state + dispatch action ; output: new state output
// should be a pure function : same input leads to same output.

const store = redux.createStore(counterReducer); // which reducer is responsible for the change in store

console.log(store.getState());

const counterSubsribler = () => {
  const latestState = store.getState();

  console.log(latestState);
};

store.subscribe(counterSubsribler);

store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
