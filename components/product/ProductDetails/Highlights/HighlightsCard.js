import cn from 'clsx'
import React from 'react'
import StarsRating from '../../StarsRating'

const HighlightsCard = ({ highlight }) => {


    return (
    <div className="mb-5  border-[1px] border-opacity-40 rounded p-6 border-black  w-full max-w-[600px]">
    <div className="flex items-center mb-3 gap-1">
    <StarsRating num={highlight.rating}/>
        <p className="text-s font-bold">({ highlight.rating })</p>
    </div>    
    <div>
            <p className="text-sm">
                { highlight.comment }
            </p>
        </div>
    </div>
  )
}

export default HighlightsCard