
import { useState } from "react"


const Greetings = () => {
  const greeting = useState((state) => state.greetings);
  return (
    <div>
      <h1>{ greeting }</h1>
      <button>Shuffle</button>
    </div>
  )
}

export default Greetings;