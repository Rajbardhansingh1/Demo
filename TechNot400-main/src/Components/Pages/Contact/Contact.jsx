import React from 'react'
import GetInTouch from './ContactPages/GetInTouch'
import ContactDetails from './ContactPages/ContactDetails'
import ContactForm from './ContactPages/ContactForm'
import Map from './ContactPages/Map'

const Contact = () => {
  return (
    <>
      <GetInTouch/>
      <ContactDetails/>
      <ContactForm/>
      <Map/>
    </>
  )
}

export default Contact