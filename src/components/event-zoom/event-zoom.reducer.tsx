import moment from 'moment';
import firebase from 'firebase';
import {find} from 'lodash';

import * as actions from './event-zoom.actions';
import { EventZoomState } from '../../types';
import {INITIAL_STATE as EVENT_INITIAL_STATE} from '../event-creation/event-creation.reducer';
import { objectValuesToArray } from '../../helpers';

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
            const currentUser = firebase.auth().currentUser;
            const isOwned = currentUser.uid === action.payload.owner;

            const guests = action.payload.guests || [];
            const isGuest = !!find(guests, {id: currentUser.uid});
            return {
                ...state,
                item: {
                    ...action.payload,
                    isOwned: isOwned,
                    isGuest: isGuest,
                    guests: guests
                },
                loading: false
            };
        // case actions.EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE:
        //     return {
        //         ...state,
        //         item: {
        //             ...state.item,
        //             guests: objectValuesToArray(action.payload)
        //         },
        //         loading: false
        //     };
        default:
            return state;
    }
};
