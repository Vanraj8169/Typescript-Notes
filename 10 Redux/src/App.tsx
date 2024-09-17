import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, StateType } from "./redux";

function App() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);
  const incrementByValueHandler = () => {
    dispatch(incrementByValue(val));
  };

  return (
    <>
      <h1>Toolkit</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={incrementByValueHandler}>
        Add
      </button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
