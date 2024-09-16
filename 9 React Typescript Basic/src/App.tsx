import { useReducer } from "react";

type stateType = {
  count: number;
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: stateType = {
  count: 0,
};
const reducer = (state: stateType, action: ActionType): stateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 1,
    })
  }

  const decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1,
    })
  }
  return (
    <div>
      <h1>Count Change</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
