import * as actions from './event-list.actions';
import { EventCreationState } from '../../types';

export const INITIAL_STATE = {
    list: []
};

export default (state = INITIAL_STATE, action): any => {
    switch (action.type) {
        case actions.EVENT_LIST_FETCH_SUCCESS_ACTION_TYPE:
            console.log('event-list.reducer.EVENT_LIST_FETCH_SUCCESS_ACTION_TYPE', action.payload)
            return {
                ...state,
                list: [...action.payload],
            };
        default:
            return state;
    }
};
