import React, { Component } from "react";
import { Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import NoteFrom from './noteFrom';

const homeStackNavigator = StackNavigator({
    Home : {screen : Home},
    NoteFrom : {screen : NoteFrom}
});

export default homeStackNavigator;