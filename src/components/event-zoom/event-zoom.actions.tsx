import firebase from 'firebase';
import { values, forEach } from 'lodash';
import {Actions} from 'react-native-router-flux';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';

import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS } from '../../router';
import { objectValuesToArray } from '../../helpers';

let callback;
let ref;

export const EVENT_ZOOM_FETCH_ACTION_TYPE = '[EventZoom] FetchAction';
export const EventZoomFetchAction = (eventId) => {
    return (dispatch) => {
        dispatch({ type: EVENT_ZOOM_FETCH_ACTION_TYPE });
        const user = firebase.auth().currentUser;
        if (ref && callback) {
            ref.off('value', callback);
        }
        ref = firebase.database().ref(DB_EVENTS).child(eventId);

        Observable.fromEvent(ref, 'value')
            .map(resp => (resp as any).val())
            .subscribe(theEvent => {
                const guestArray = objectValuesToArray(theEvent.guests);
                Observable.from(guestArray)
                    .flatMap(expandChild)
                    .subscribe((snapshot) => {
                        console.log('eventss', (snapshot as any).val())
                    })
            })
        // callback = ref.on('value', (snapshot) => {
        //     dispatch(EventZoomFetchSuccessAction({id: eventId, ...value}));
        // });
    };
};

function expandChild(guest) {
    console.log('expandChild', guest)
    return Observable.fromEvent(ref.child(guest), 'value');
    //  .child(guestId).once('value').then(g => expanded.push(g));
}

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
        const user = firebase.auth().currentUser || {uid: 'bolza'};
        const guests = firebase.database().ref(DB_EVENTS).child(eventId).child('guests');
        guests.push(user.uid)
            .then(res => {
                console.log('success', res.val())
                dispatch(EventZoomJoinSuccessAction(res.val()));
            })
            .catch(err => {
                console.log('error', err)
            });
    };
};

export const EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE = '[EventZoom] Join Success';
export const EventZoomJoinSuccessAction = (payload) => {
     return {
        type: EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE,
        payload
    };
};
