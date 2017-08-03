import * as actions from './event-zoom.actions';
import { EventZoomState } from '../../types';
import moment from 'moment';
import { EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE } from './event-zoom.actions';
import {INITIAL_STATE as EVENT_INITIAL_STATE} from '../event-creation/event-creation.reducer';

const DEFAULT_DATE = moment().format('LT');
const DEFAULT_PEOPLE = 5;

export const INITIAL_STATE: EventZoomState = {
    item: {...EVENT_INITIAL_STATE},
    loading: false,
};

export default (state = INITIAL_STATE, action): EventZoomState => {
    switch (action.type) {
        case actions.EVENT_LIST_FETCH_ACTION_TYPE:
            return {
                ...state,
                loading: true
            };
        case actions.EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE:
            return {
                ...state,
                item: {...action.payload},
                loading: false
            };
        default:
            return state;
    }
};
