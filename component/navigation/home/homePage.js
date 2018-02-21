import React, { Component } from "react";
import { Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import AddNote from './addNote';

const stackHome = StackNavigator({
    home : { screen: Home },
    AddNote : { screen: AddNote },
});

export default stackHome;