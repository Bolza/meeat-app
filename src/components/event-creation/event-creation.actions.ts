import firebase from 'firebase';
// import { values } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationType, Location} from '../../types';

export const EVENT_CREATION_SET_LOCATION_ACTION_TYPE = '[EventCreation] SetLocation';
export const EventCreationSetLocationAction = (payload: Location) => {
    return {
        type: EVENT_CREATION_SET_LOCATION_ACTION_TYPE,
        payload,
    };
};

export const EVENT_CREATION_SET_DATE_ACTION_TYPE = '[EventCreation] SetDate';
export const EventCreationSetDateAction = (payload) => {
    return {
        type: EVENT_CREATION_SET_DATE_ACTION_TYPE,
        payload
    };
};

export const CREATE_EVENT_ACTION = '[EventCreation] Calling Firebase API';
export const CreateEventAction = (payload: EventCreationType) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EVENT_ACTION });
        firebase.database()
            .ref()
            .child('app/events')
            .push(eventObjectFactory(payload))
            .then(res => {
                console.log(res)
                // dispatch(CreateEventSuccessAction(res);
            })
            .catch(err => dispatch(CreateEventFailAction(err)));
    };
};

export const CREATE_EVENT_SUCCESS_ACTION = '[EventCreation] Create EventCreationType Success';
export const CreateEventSuccessAction = (event: EventCreationType) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EVENT_SUCCESS_ACTION });
        Actions.EventList({type: 'reset'});
    };
};

export const CREATE_EVENT_FAIL_ACTION = '[EventCreation] Create EventCreationType Fail';
export const CreateEventFailAction = (error) => {
    return {
        type: CREATE_EVENT_FAIL_ACTION,
        payload: error
    };
};

const eventObjectFactory = (originalPayload: EventCreationType): EventCreationType => {
    const newPayload: EventCreationType = {
        ...originalPayload,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        owner: firebase.auth().currentUser,
    };
    return newPayload;
};
