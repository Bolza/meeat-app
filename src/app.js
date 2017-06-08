import React from 'react';
import firebase from 'firebase';

import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import Login from './components/login.component';

 const config = {
    apiKey: 'AIzaSyA3D_frhPdNG2vYG0QAKMwe4-xI2K8-VyQ',
    authDomain: 'manager-956c7.firebaseapp.com',
    databaseURL: 'https://manager-956c7.firebaseio.com',
    projectId: 'manager-956c7',
    storageBucket: 'manager-956c7.appspot.com',
    messagingSenderId: '449402475100'
};

const App = () => {
    firebase.initializeApp(config);

    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header text="Tech Stack" />
                <Login />
            </View>
        </Provider>
    );
};

export default App;
