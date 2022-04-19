
import { useState } from "react"


const Greetings = () => {
  const greeting = useState((state) => state.greeting);
  return (
    <div>
    <h1>{ greeting }</h1>
  </div>
  )
}

export default Greetings;