import { EVENT_CREATION_SET_LOCATION_ACTION_TYPE, EVENT_CREATION_SET_DATE_ACTION_TYPE } from './event-creation.actions';
import { EventCreationState } from '../../types';

export const INITIAL_STATE: EventCreationState = {
    people: 0,
    date: null,
    location: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
    },
    details: {}
};

export default (state = INITIAL_STATE, action): EventCreationState => {
    switch (action.type) {
        case EVENT_CREATION_SET_LOCATION_ACTION_TYPE:
            return {
                ...state,
                location: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                },
                details: {
                    ...action.payload
                },
                name: action.payload.name
            };
        case EVENT_CREATION_SET_DATE_ACTION_TYPE:
            return {
                ...state,
                date: action.payload,
            };
        default:
            return state;
    }
};
