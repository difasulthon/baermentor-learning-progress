import { createContext, useContext, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

type CountType = number;

const CountContext = createContext<CountType>(0);

type ActionType = { type: "increment" } | { type: "decrement" };

const initialCountState = {
  count: 0,
};

function countReducer(state: typeof initialCountState, action: ActionType) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      () => {};
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, initialCountState);

  const { isError, isLoading, data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://mock-todo.free.beeceptor.com").then((res) => res.json()),
  });

  console.log("data", data);

  return (
    <>
      <h1>Elder</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <CountContext.Provider value={state.count}>
        <Children />
      </CountContext.Provider>
    </>
  );
}

function Children() {
  const count = useContext(CountContext);
  return (
    <>
      <h1>Oldest Children</h1>
      <div>{count}</div>
      <YoungChildren />
    </>
  );
}

function YoungChildren() {
  const count = useContext(CountContext);
  return (
    <>
      <h1>Youngest Children</h1>
      <div>{count}</div>
    </>
  );
}

export default App;
