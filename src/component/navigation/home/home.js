import React, { Component } from 'react';
import {View, Text,Image, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Styles from '../../style/styles';
import ItemList from './itemList';

export default class Home extends Component {
    static navigationOptions = {
        title: 'บันทึก',
        headerStyle:{
            elevation: 0,
            shadowOpacity: 0
        },
        tabBarIcon: ({ tintColor }) => (
            <Image
            source = {require('../../../../img/edit.png')}
                style={[
                    Styles.iconSize,
                    {tintColor:tintColor}
                ]}
            />
        ),
    };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={Styles.container}>
                <ItemList/>
            </View>  
        );
    }
}