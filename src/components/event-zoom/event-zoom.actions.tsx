import firebase from 'firebase';
import { values, forEach } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS } from '../../router';

export const EVENT_LIST_FETCH_ACTION_TYPE = '[EventList] FetchAction';
export const EventListFetchAction = () => {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        firebase.database().ref(DB_EVENTS)
            .on('value', (snapshot) => {
                const value = snapshot.val();
                console.log('got values', value);
                let eventsArray = [];
                forEach(value, (v, k) => {
                    eventsArray.push({...v, id: k});
                });
                dispatch(EventZoomFetchSuccessAction(eventsArray));
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