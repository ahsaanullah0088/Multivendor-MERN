import React from 'react'
import Header from '../Components/Layout/Header'
import EventCard from '../Components/Events/EventCard'

const EventsPage = () => {
  return (
    <div>
      <Header/>
      <EventCard active = {true}/>
      <EventCard active = {true}/>

    </div>
  )
}

export default EventsPage
