<<<<<<< HEAD
import { useState } from "react";
import Box from "./components/Box";
||||||| 7ca68ac
import Box from "./components/Box";
=======
import { useReducer } from "react";
>>>>>>> 875cdb968a865dd781b4e76db121749bb9d5e9cc

<<<<<<< HEAD
function App() {
  const [val, setVal] = useState<string>("");
||||||| 7ca68ac
function App() {
=======
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
>>>>>>> 875cdb968a865dd781b4e76db121749bb9d5e9cc
  return (
<<<<<<< HEAD
    <>
      <div>
        <Box label="Search" value={val} setter={setVal} />
      </div>
    </>
||||||| 7ca68ac
    <>
      <div>
        <Box label="Search" value={"Search anything"} onChange={() => {}} />
      </div>
    </>
=======
    <div>
      <h1>Count Change</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
>>>>>>> 875cdb968a865dd781b4e76db121749bb9d5e9cc
  );
};

export default App;
