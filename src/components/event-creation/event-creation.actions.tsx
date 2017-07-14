import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS } from '../../router';

export const EVENT_CREATION_SET_LOCATION_ACTION_TYPE = '[EventCreation] SetLocation';
export const EventCreationSetLocationAction = (payload: LocationDetails) => {
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

export const EVENT_CREATION_SET_SLOTS_ACTION_TYPE = '[EventCreation] SetSlots';
export const EventCreationSetSlotsAction = (payload) => {
    return {
        type: EVENT_CREATION_SET_SLOTS_ACTION_TYPE,
        payload
    };
};

export const CREATE_EVENT_ACTION = '[EventCreation] Calling Firebase API';
export const CreateEventAction = (payload) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EVENT_ACTION });
        firebase.database()
            .ref()
            .child(DB_EVENTS)
            .push(eventObjectFactory(payload))
            .then(res => {
                console.log(res)
                // dispatch(CreateEventSuccessAction(res);
            })
            .catch(err => dispatch(CreateEventFailAction(err)));
    };
};

export const CREATE_EVENT_SUCCESS_ACTION = '[EventCreation] Create Event Success';
export const CreateEventSuccessAction = (event) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EVENT_SUCCESS_ACTION });
        Actions.EventList({type: 'reset'});
    };
};

export const CREATE_EVENT_FAIL_ACTION = '[EventCreation] Create Event Fail';
export const CreateEventFailAction = (error) => {
    return {
        type: CREATE_EVENT_FAIL_ACTION,
        payload: error
    };
};

const eventObjectFactory = (originalPayload: EventCreationState): any => {
    const newPayload = {
        location: originalPayload.details,
        date: originalPayload.date,
        slots: originalPayload.slots,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        owner: firebase.auth().currentUser,
    };
    return newPayload;
};
