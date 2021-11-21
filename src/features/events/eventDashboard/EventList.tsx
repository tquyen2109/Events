import React from "react";
import EventListItem from "./EventListItem";
import {Events, Event} from "../models/event";

export default function EventList({events, selectEvent, deleteEvent}: any) {
    return  (
        <>
            {events.map((event: Event) => (
                <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent}/>
            ))}
        </>

    )
}