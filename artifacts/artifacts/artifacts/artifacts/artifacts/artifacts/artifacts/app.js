import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './router';
const config = {
    // apiKey: 'AIzaSyA3D_frhPdNG2vYG0QAKMwe4-xI2K8-VyQ',
    // authDomain: 'manager-956c7.firebaseapp.com',
    // databaseURL: 'https://manager-956c7.firebaseio.com',
    // projectId: 'manager-956c7',
    // storageBucket: 'manager-956c7.appspot.com',
    // messagingSenderId: '449402475100'
    apiKey: 'AIzaSyBFC1NHvenIIRSDGroVWzGpAqmT14YeOyA',
    authDomain: 'meat-5432f.firebaseapp.com',
    databaseURL: 'https://meat-5432f.firebaseio.com',
    projectId: 'meat-5432f',
    storageBucket: 'meat-5432f.appspot.com',
    messagingSenderId: '260439457350'
};
const Logger = (store) => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};
class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, { auth: {} }, applyMiddleware(ReduxThunk, Logger));
        return (React.createElement(Provider, { store: store }, React.createElement(View, { style: { flex: 1 } }, React.createElement(Router, null))));
    }
}
export default App;
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map