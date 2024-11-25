import React, { useState } from 'react'

const Counter = () => {
  // The use state
  const [count, setCount] = useState(0);

  const increase = () =>{
    setCount(count + 1)
  }

const decrease = () =>{
    setCount(count - 1)
  }


  return (
    <div>
      <p>The button has been clicked {count} times</p>
      <button className='bu' onClick={increase}>Increase</button>
      <button className='bu2' onClick={decrease}>Decrease</button>

    </div>
  )
}

export default Counter
