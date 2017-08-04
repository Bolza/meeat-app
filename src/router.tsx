import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/login/login.component';
import EventCreationComponent from './components/event-creation/event-creation.component';
import EventZoomComponent from './components/event-zoom/event-zoom.component';
import EventListComponent from './components/event-list/event-list.component';

const RouterComponent = () => {
    return (
        <Router sceneStyle={style}>
            <Scene key='meeat' initial>
                <Scene
                    key='EventList'
                    component={EventListComponent}
                    title='Events Near You'
                    rightTitle='Add'
                    onRight={() => Actions.EventCreation()}
                />
                <Scene
                    key='EventCreation'
                    component={EventCreationComponent}
                    title='Create new Event'
                />
                <Scene
                    key='EventZoom'
                    component={EventZoomComponent}
                    title='View Event'
                    leftTitle='Back'
                    onLeft={() => Actions.EventList()}
                />
            </Scene>
             <Scene key='auth'>
                <Scene key='login'component={Login} title='Login' />
            </Scene>
        </Router>
    );
};

const style = {
    paddingTop: 65
};

export const DB_EVENTS: string = 'app/events';

export default RouterComponent;
