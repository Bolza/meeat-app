// import firebase from 'firebase';
// import { values } from 'lodash';
// import {Actions} from 'react-native-router-flux';

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
