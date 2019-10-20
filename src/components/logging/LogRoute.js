import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";

//TODO: Maybe save all events in local storage, up to 500 events
// Create another component that creates a chart using that data structure from local storage.

/**
 * Work in progress but basically a component that logs location changes
 * @returns {null}
 * @constructor
 */
export const LogRoute = () => {
    const location = useLocation();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const eventDate = new Date();
        const event = {
            path: location.pathname,
            search: location.search,
            when: eventDate.toISOString()
        };
        setEvents(current => current.concat(event));
    }, [location.pathname, location.search]);

    useEffect(() => {
        if(events.length >= 15){
            console.log('Greater than or equal to 15 submitting');
            console.log(events);
            setEvents([]);
        }
    }, [events.length]);

    return null;
};

export default LogRoute;