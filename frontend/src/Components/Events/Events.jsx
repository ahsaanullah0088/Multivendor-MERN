import React, { useEffect } from "react";
import styles from "../../styles/styles";
import EventCard from "./EventCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/actions/event"; // <-- Make sure path is correct

const Events = () => {
  const dispatch = useDispatch();
  const { allEvents, isLoading } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  console.log("allEvents:", allEvents);

  return (
    <div>
      {!isLoading && allEvents && allEvents.length > 0 && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>
          <div className="w-full grid">
            <EventCard data={allEvents[0]} />
          </div>
        </div>
      )}

      {!isLoading && allEvents && allEvents.length === 0 && (
        <div className="py-12 text-center text-gray-500">No events found.</div>
      )}
    </div>
  );
};

export default Events;
