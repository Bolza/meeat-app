import firebase from 'firebase';
import GeoFire from 'geofire';
import { values, forEach } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails, User } from '../../types';
import { DB_EVENTS } from '../../router';
import { objectValuesToArray } from '../../helpers';
import { observeEvent, addLoggedUserToEvent } from './event-zoom.database';

let callback;
let ref;

export const EVENT_ZOOM_FETCH_ACTION_TYPE = '[EventZoom] FetchAction';
export const EventZoomFetchAction = (eventId) => {
    return (dispatch) => {
        dispatch({ type: EVENT_ZOOM_FETCH_ACTION_TYPE });
        // XXX: we are already navigating to zoom view before this ends
        observeEvent(eventId).subscribe(expandedEvent => {
            dispatch(EventZoomFetchSuccessAction(expandedEvent));
        })
    };
};

export const EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE = '[EventZoom] FetchAction Success';
export const EventZoomFetchSuccessAction = (payload) => {
     return {
        type: EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE,
        payload
    };
};

export const EVENT_ZOOM_JOIN_ACTION_TYPE = '[EventZoom] Join';
export const EventZoomJoinAction = (eventId) => {
    return (dispatch) => {
        dispatch({ type: EVENT_ZOOM_JOIN_ACTION_TYPE, payload: eventId });
        addLoggedUserToEvent(eventId).subscribe(() => {
            dispatch(EventZoomJoinSuccessAction());
        });
    };
};

export const EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE = '[EventZoom] Join Success';
export const EventZoomJoinSuccessAction = () => {
     return {
        type: EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE,
    };
};
