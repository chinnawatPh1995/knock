import React, { Component } from 'react';
import {Text, View} from 'react-native';

import TabNavigator from './navigation/tabNavigator'

export default class App extends Component{
    render(){
        return(
            <TabNavigator/>
        );
    }
}