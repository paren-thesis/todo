import React, { useEffect, useState } from 'react'

const Counter = () => {
  // The use state
  const [count, setCount] = useState(0);

  // Increases the count
  const increase = () =>{
    setCount(count + 1)
  }

  // Decreases the count
const decrease = () =>{
    setCount(count - 1)
  }

  useEffect(() => {
    console.log('The count is:', count);
  }, [count])

  return (
    <div>
      <p>The button has been clicked {count} times</p>
      <button className='bu' onClick={increase}>Increase</button>
      <button className='bu2' onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter
