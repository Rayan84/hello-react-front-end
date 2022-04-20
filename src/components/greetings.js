import React from "react";
import { useSelector, useDispatch } from "react-redux";
import triggerShuffle from "../redux/actions/greetingAction";


const Greetings = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>State: { greeting.msg }</h1>
      <button onClick={ () => { dispatch(triggerShuffle())} }>Shuffle</button>

    </div>
  )
}

export default Greetings;