import { EVENT_CREATION_SET_LOCATION_ACTION_TYPE, EVENT_CREATION_SET_DATE_ACTION_TYPE } from './event-creation.actions';
import { EventCreationType } from '../../types';

export const INITIAL_STATE: EventCreationType = {
    people: 0,
    date: null,
    location: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
    },
    details: {
        latitude: null,
        longitude: null,
        id: null,
        name: null,
        address: null,
        rating: null,
        phone: null,
    }
};

export default (state = INITIAL_STATE, action): EventCreationType => {
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
