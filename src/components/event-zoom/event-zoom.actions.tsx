import firebase from 'firebase';
import { values, forEach } from 'lodash';
import {Actions} from 'react-native-router-flux';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/reduce';

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
                Observable
                    .from(guestArray)
                    .flatMap(expandChild)
                    .take(guestArray.length)
                    // .reduce((a, v) => [...(a as Array<any>), (v as any).val()], [])
                    // we lose the UID, only keep the google id
                    .reduce((a, v) => {
                        const key = (v as any).key;
                        const val = (v as any).val();
                        val.id = val.uid = key;
                        a[key] = val;
                        return a;
                    }, {})
                    .subscribe( (users) => {
                        const completeEvent = {...theEvent, guests: users}
                        console.log('eventss', completeEvent);
                        dispatch(EventZoomFetchSuccessAction({id: eventId, ...completeEvent}));
                    })
            });
    };
};

function expandChild(guest) {
    const userRef = firebase.database().ref().child('users').child(guest);
    return Observable.fromEvent(userRef, 'value');
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
