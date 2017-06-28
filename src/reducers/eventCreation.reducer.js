import { EVENT_CREATION_SET_LOCATION_ACTION_TYPE } from '../actions';

const INITIAL_STATE = {
    location: {
        latitude: null,
        longitude: null,
    }
};

export default (state = INITIAL_STATE, action) => {
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
