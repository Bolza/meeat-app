import firebase from 'firebase';
import GeoFire from 'geofire';
import { DB_EVENTS, DB_EVENT_LOCATIONS } from './router';

export function getEventsRef() {
    return firebase.database().ref(DB_EVENTS);
}

export function getEventRef(eventId) {
    return firebase.database().ref(DB_EVENTS).child(eventId);
}
