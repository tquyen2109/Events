import React from "react";
import EventListItem from "./EventListItem";
import {Events, Event} from "../models/event";

export default function EventList({events}: Events) {
    return  (
        <>
            {events.map((event: Event) => (
                <EventListItem event={event} key={event.id}/>
            ))}
        </>

    )
}