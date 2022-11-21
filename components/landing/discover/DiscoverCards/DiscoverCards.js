import React from 'react'
import DiscoverCard from './DiscoverCard'
import generateDiscoverAssets from './DiscoverCards.utils'

const DiscoverCards = () => {
const cards = generateDiscoverAssets()

  return (
    <div className="flex pt-14 w-full">
        {
            cards.map((card, idx) => (
                <DiscoverCard card={card} key={idx}/>
            ))
        }
    </div>
  )
}

export default DiscoverCards