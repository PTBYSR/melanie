import React from 'react'
import Arrow from './Arrow'
import Circle from './Circle'

const CallToAction = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative">
        <Circle className="" color="#47362B" size={50}/>
        <Arrow className="absolute -left-8 bottom-[40%]" color="#47362B" size={1}/>
      </div>
    </div>
  )
}

export default CallToAction