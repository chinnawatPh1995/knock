import React, { Component } from 'react';
import {View, Text, Image, Button, TextInput} from 'react-native';

import Styles from '../../style/styles';

export default class AddNote extends Component {
    static navigationOptions = {
        title: 'เพิ่มการแจ้งเตือน',
        headerStyle:{
            elevation: 0,
            shadowOpacity: 0
        },
      }
    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    placeholder = {'Please enter '}
                    Styles = {Styles.TextInputStyle}
                />
            </View>
            
        );
    }
}