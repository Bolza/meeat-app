import firebase from 'firebase';
import { values, forEach } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS } from '../../router';

let callback;
let ref;

export const EVENT_LIST_FETCH_ACTION_TYPE = '[EventList] FetchAction';
export const EventZoomFetchAction = (eventId) => {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        if (ref && callback) {
            ref.off('value', callback);
        }
        ref = firebase.database().ref(DB_EVENTS).child(eventId);
        callback = ref.on('value', (snapshot) => {
            const value = snapshot.val();
            dispatch(EventZoomFetchSuccessAction(value));
        });
    };
};

export const EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE = '[EventZoom] FetchAction Success';
export const EventZoomFetchSuccessAction = (payload) => {
     return {
        type: EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE,
        payload
    };
};
