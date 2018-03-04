import React, { Component } from 'react';
import {Text, View} from 'react-native';

import TabNavigator from './component/navigation/tabNavigator';
import firebase from 'firebase';

export default class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBxZY7Dp3y0XfaItx1IZj-RHvUzRle-uoQ",
            authDomain: "rn-tct.firebaseapp.com",
            databaseURL: "https://rn-tct.firebaseio.com",
            projectId: "rn-tct",
            storageBucket: "rn-tct.appspot.com",
        };
        firebase.initializeApp(config);
    }
    render(){
        return(
            <TabNavigator/>
        );
    }
}