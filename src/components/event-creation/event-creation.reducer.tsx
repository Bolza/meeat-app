import { EVENT_CREATION_SET_LOCATION_ACTION_TYPE, EVENT_CREATION_SET_DATE_ACTION_TYPE } from './event-creation.actions';

export interface EventCreationType {
    location: {
        latitude: string,
        longitude: string
    },
    date: string
}

const INITIAL_STATE: EventCreationType = {
    location: {
        latitude: null,
        longitude: null,
    },
    date: null
};

export default (state = INITIAL_STATE, action): EventCreationType => {
    switch (action.type) {
        case EVENT_CREATION_SET_LOCATION_ACTION_TYPE:
            return {
                ...state,
                location: action.payload,
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
