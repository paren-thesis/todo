import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonClicked = () =>{
    setCount(count + 1)
  }


  return (
    <div>
      <p>The button has been clicked {count} times</p>
      <button className='bu' onClick={buttonClicked}>Touch Me</button>
    </div>
  )
}

export default Counter
