import React from 'react'
import BookUsHead from './BookUsPages/BookUsHead'
import Testimonial from '../../Testimonial/Testimonial'
import BookUsBenificials from './BookUsPages/BookUsBenificials'
import BookUsFocus from './BookUsPages/BookUsFocus'
import BookUsSteps from './BookUsPages/BookUsSteps'
import BookUsBonus from './BookUsPages/BookUsBonus'
import BookUsChooseUs from './BookUsPages/BookUsChooseUs'
import BookUsFaq from './BookUsPages/BookUsFaq'
import BookUsFinal from './BookUsPages/BookUsFinal'

const BookUs = () => {
  return (
    <>
        <div className='overflow-hidden'>
        <BookUsHead/>
        <BookUsSteps/>
        <BookUsBenificials/>
        <BookUsFocus/>
        <BookUsBonus/>
        <BookUsChooseUs/>
        <Testimonial/>
        <BookUsFaq/>
        <BookUsFinal/>
        </div>
    </>
  )
}

export default BookUs