import * as actions from './event-list.actions';
import {sortBy, filter, find} from 'lodash';
import { EventCreationState } from '../../types';

export const INITIAL_STATE = {
    list: []
};

export default (state = INITIAL_STATE, action): any => {
    switch (action.type) {
        case actions.EVENT_LIST_ADD_ACTION_TYPE:
            let temp = [...state.list];
            const eventAlreadyExists = !!find(temp, {id: action.payload.id});

            if (eventAlreadyExists) {
                temp = updateList(temp, action.payload);
            } else {
                temp.push(action.payload);
            }

            temp = sortBy(temp, ['distance']);

            return {
                ...state,
                list: [...temp],
            };
        case actions.EVENT_LIST_REMOVE_ACTION_TYPE:
            return {
                ...state,
                list: filter(state.list, (item) => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};

function updateList(tList, item) {
    return tList.map(obj => {
        if (obj.id === item.id) return item;
        return obj;
    });
}
