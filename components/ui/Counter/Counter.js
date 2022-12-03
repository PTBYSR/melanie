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
    <div className='w-24 py-2 flex items-center justify-around border-black border-[1px]'>
        <button className="text-xl font-semibold" onClick={decrement}>-</button>
        <div>{counter}</div>
        <button className="text-xl font-semibold" onClick={increment}>+</button>
    </div>
  )
}

export default Counter