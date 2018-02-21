import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';

import Styles from '../../style/styles';

export default class Setting extends Component {
    static navigationOptions = {
        title: 'ตั้งค่า',
        tabBarIcon: ({ tintColor }) => (
            <Image
                style={[
                    Styles.iconSize,
                    {tintColor:tintColor}
                ]}
                source= {require('../../../img/controls.png')}
            />
        ),
    }
    render(){
        return(
            <View>
                <Text>
                    Tab 3
                </Text>
            </View>
        );
    }
}