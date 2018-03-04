import React, { Component } from 'react';
import {View, Text} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from './home/home';
import Suggest from './suggest/suggest';
import Setting from './setting/setting';
import HomePage from './home/homePage';
import NoteFrom from './home/noteFrom';

const tabNavigation = TabNavigator({
    Home:    {screen: Home},
    Suggest: {screen: Suggest},
    Setting: {screen: Setting}
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'rgb(255, 84, 0)',
        inactiveTintColor: 'rgb(10,10,10)',
        showIcon: true,
        lableStyle: {
            fontSize: 18,
        },
        tabStyle:{
            padding: 0,
        },
        style: {
            backgroundColor: 'rgb(255,255,255)',
        },
        indicatorStyle: {
            backgroundColor: 'rgb(255,255,255)',
        }
    }
});

const StackOfNoteFrom = StackNavigator({
    Home : {screen : tabNavigation},
    NoteFrom : {screen : NoteFrom}
});

export default StackOfNoteFrom;