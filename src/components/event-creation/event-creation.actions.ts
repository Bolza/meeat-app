import firebase from 'firebase';
// import { values } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { Event } from '../../types';

export const EVENT_CREATION_SET_LOCATION_ACTION_TYPE = '[EventCreation] SetLocation';
export const EventCreationSetLocationAction = ({latitude, longitude}) => {
    return {
        type: EVENT_CREATION_SET_LOCATION_ACTION_TYPE,
        payload: {latitude, longitude}
    };
};

export const EVENT_CREATION_SET_DATE_ACTION_TYPE = '[EventCreation] SetDate';
export const EventCreationSetDateAction = (payload) => {
    return {
        type: EVENT_CREATION_SET_DATE_ACTION_TYPE,
        payload
    };
};

export const CREATE_EVENT_ACTION = 'Create Event';
export const CreateEventAction = (payload: Event) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EVENT_ACTION });
        const user = firebase.auth().currentUser;
        firebase.database()
            .ref()
            .child('app/events')
            .push(payload)
            .then(res => {
                console.log(res)
                // dispatch(CreateEventSuccessAction(res);
            })
            .catch(err => dispatch(CreateEventFailAction(err)));
    };
};

export const CREATE_EVENT_SUCCESS_ACTION = 'Create Event Success';
export const CreateEventSuccessAction = (event: Event) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EVENT_SUCCESS_ACTION });
        Actions.EventList({type: 'reset'});
    };
};

export const CREATE_EVENT_FAIL_ACTION = 'Create Event Fail';
export const CreateEventFailAction = (error) => {
    return {
        type: CREATE_EVENT_FAIL_ACTION,
        payload: error
    };
};