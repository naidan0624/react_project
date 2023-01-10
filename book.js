import React, { useState, useCallback,useMemo } from "react";
import { Calendar, DateLocalizer, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import PropTypes from 'prop-types'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);
const myEventsList = [
  { start: new Date(Date.now()), end: new Date(), title: "appointment" },
];
const DnDCalendar = withDragAndDrop(Calendar);

export default function CreateEventWithNoOverlap( {
 
  localizer,
  dayLayoutAlgorithm = 'no-overlap',
}) {
  const [myEvents, setEvents] = useState(myEventsList);
  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("New Event Name");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(2023, 1, 1, 6),
    }),
    []
  );

  const resourceTech = [
    { resourceId: 1, resourceTitle: "Amy" },
    { resourceId: 2, resourceTitle: "Holly" },
    { resourceId: 3, resourceTitle: "Anna" },
  ];
  return (
    <div>
      <h1 >Calendar</h1>
      <DnDCalendar 
        draggableAccessor={(events) => true}
        // onEventDrop={moveEvent}
        // onEventResize={resizeEvent}
        // popup
        // resizable
        dayLayoutAlgorithm={dayLayoutAlgorithm}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
        defaultDate={defaultDate}
  
  
        defaultView={Views.WORK_WEEK}
        views={["day", "week"]}
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        step={15}
        timeslots={4}
        resources= {resourceTech} 
        resourceIdAccessor={"resourceId"}
        resourceTitleAccessor={"resourceTitle"}
        culture={moment.locale("nl")}
        messages={{
          today: "Өнөөдөр",
          previous: "<",
          next: ">",
        }}
        
      />
    </div>
  )

}
CreateEventWithNoOverlap.propTypes= {
  localizer: PropTypes.instanceOf(DateLocalizer),
  dayLayoutAlgorithm: PropTypes.string,
}
