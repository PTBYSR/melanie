import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(1)
    const decrement = () => {
        if(counter > 0) {
            setCounter((t) => t - 1)
        }
    }
    const increment = () => {
        setCounter((t) => t + 1)
    }

  return (
    <div className='w-20 h-10 flex items-center justify-around border-black border-[1px]'>
        <button onClick={decrement}>-</button>
        <div>{counter}</div>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter