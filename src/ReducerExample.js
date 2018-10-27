import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { count: action.payload };
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialState, {
    type: "reset",
    payload: initialCount
  });

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

const Reducer = () => (
  <>
    <Counter initialCount={2} />
  </>
);

export default Reducer;
