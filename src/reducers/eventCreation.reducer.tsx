import { EVENT_CREATION_SET_LOCATION_ACTION_TYPE } from '../actions';

export interface EventCreationType {
    location: {
        latitude: string,
        longitude: string
    }
}

const INITIAL_STATE: EventCreationType = {
    location: {
        latitude: null,
        longitude: null,
    }
};

export default (state = INITIAL_STATE, action): EventCreationType => {
    switch (action.type) {
        case EVENT_CREATION_SET_LOCATION_ACTION_TYPE:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};
