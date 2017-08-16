import moment from 'moment';
import { values, forEach } from 'lodash';
import firebase from 'firebase';

import * as actions from './event-zoom.actions';
import { EventZoomState } from '../../types';
import {INITIAL_STATE as EVENT_INITIAL_STATE} from '../event-creation/event-creation.reducer';

export const INITIAL_STATE: EventZoomState = {
    item: {...EVENT_INITIAL_STATE, owner: '', guests: [], id: ''},
    loading: false,
};

export default (state = INITIAL_STATE, action): EventZoomState => {
    switch (action.type) {
        case actions.EVENT_ZOOM_FETCH_ACTION_TYPE:
            return {
                ...state,
                loading: true
            };
        case actions.EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE:
            const owner = firebase.auth().currentUser;
            const isOwned = owner.uid === action.payload.owner;
            return {
                ...state,
                item: {
                    ...action.payload,
                    isOwned: isOwned,
                    guests: objToArray(action.payload.guests)
                },
                loading: false
            };
        case actions.EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE:
            return {
                ...state,
                item: {
                    ...state.item,
                    guests: objToArray(action.payload)
                },
                loading: false
            };
        default:
            return state;
    }
};

function objToArray(obj) {
    let array = [];
    forEach(obj, (v, k) => {
        array.push(v);
    });
    return array;
}