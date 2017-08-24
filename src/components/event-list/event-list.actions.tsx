import {Actions} from 'react-native-router-flux';
import { ListLocationalEventType, Event} from '../../types';
import { EventZoomFetchAction } from '../event-zoom/event-zoom.actions';
import { observeEventsAroundYou, observeEvent, forgetEvent } from './event-list.database';

export const EVENT_LIST_FETCH_AROUND_USER_ACTION_TYPE = '[EventList] Fetch Around User Action';
export const EventListFetchAroundUserAction = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_LIST_FETCH_AROUND_USER_ACTION_TYPE });
        observeEventsAroundYou().subscribe(locEvent => {
            if (locEvent.type === 'enter') {
                observeEvent(locEvent.id).subscribe(fullEvent => {
                    fullEvent.distance = locEvent.distance;
                    dispatch(EventListAddAction(fullEvent))
                });
            };
            if (locEvent.type === 'exit') {
                forgetEvent(locEvent.id);
                dispatch(EventListRemoveAction(locEvent));
            }
        });
    };
};

export const EVENT_LIST_ADD_ACTION_TYPE = '[EventList] Add Action';
export const EventListAddAction = (payload: Event) => {
     return {
        type: EVENT_LIST_ADD_ACTION_TYPE,
        payload
    };
};

export const EVENT_LIST_REMOVE_ACTION_TYPE = '[EventList] Remove Action';
export const EventListRemoveAction = (payload: ListLocationalEventType) => {
     return {
        type: EVENT_LIST_REMOVE_ACTION_TYPE,
        payload
    };
};

export const EVENT_LIST_FETCH_SUCCESS_ACTION_TYPE = '[EventList] FetchAction Success';
export const EventListFetchSuccessAction = (payload) => {
     return {
        type: EVENT_LIST_FETCH_SUCCESS_ACTION_TYPE,
        payload
    };
};

export const EVENT_LIST_TO_ZOOM_ACTION_TYPE = '[EventList] EventListToZoomAction';
export const EventListToZoomAction = (eventId: string) => {
    return (dispatch) => {
        dispatch({ type: EVENT_LIST_TO_ZOOM_ACTION_TYPE });
        dispatch(EventZoomFetchAction(eventId));
        Actions.EventZoom({type: 'reset', eventId: eventId});
    };
};
