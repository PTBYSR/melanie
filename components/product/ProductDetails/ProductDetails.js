import React from 'react'
import HighlightsCard from './Highlights/HighlightsCard'
import HighlightsCards from './Highlights/HighlightsCards'
import HighlightCards from './Highlights/HighlightsCards'
import WriteReview from './WriteReview'
import s from './ProductDetails.module.css'
import cn from 'clsx'
import Button from '../../ui/Button/Button'

const ProductDetails = ({ className }) => {
  return (
    <div className={className}>
        <div className="w-1/2">
             
            <div className="mb-5">
              <h1 className={cn(s.header)}>Product Details</h1>
            </div>
            <div className={cn(s.bb)}>
              <p>
              What it is: In the land between bare skin and makeup makeup exists the imperceptible wash of color that is Perfecting Skin Tint
              </p>
            </div>
            <div className={cn(s.bb)}>
              <h3 className={cn(s.headingBb)}>Why it is special:</h3>
              <ul className="text-sm">
                <li> Breathable, ultra-thin formula evens out skin’s appearance for a smooth, dewy finish</li>
                <li>
                Diamond Powder gives a brightening, soft-focus effect and minimizes the appearance of pores, while Glycerin moisturizes skin</li>
                </ul>
            </div>
            <div className={cn(s.bb)}>
              <h3 className={cn(s.headingBb)}> Our foundation is :</h3>
              <ul className="text-sm">
                <li>Vegan</li>
                <li>Cruelty-free</li>
                <li>Eco friendly</li>
              </ul>
              <p>Dermatologist tested, appropriate for all skin types, formulated without fragrance</p>
            </div>
            <div>
              //Accordion
            </div>
            <div>
              //Accordion
            </div>
            <div>
              //Accordion
            </div>
        </div>
        <div class="flex flex-col gap-5 mt-5">
          <div>
              <WriteReview />
          </div>
          <div>
            <h2 className={cn(s.header)}>Review Highlights</h2>
            <HighlightsCards />
          </div>
          <div>
            <Button variant="primary" type="w-xl">
              Read all reviews
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ProductDetails