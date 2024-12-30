import { useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type) {
    case "INC": return state + action.val
    case "DEC": return state - action.val
    default: return state
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0)

  const handlePlusButtonClick = () => {
    console.log(state)
    dispatch({
      type: "INC",
      val: 1
    })
  }
  const handleMinusButtonClick = () => {
    console.log(state)
    dispatch({
      type: "DEC",
      val: 1
    })
  }

  return <div>
    <h1>{state}</h1>
    <button
      onClick={handlePlusButtonClick}
    >+</button>
    <button
      onClick={handleMinusButtonClick}
    >-</button>
  </div>;
};

export default Exam;
