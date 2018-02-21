import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';

import Styles from '../../style/styles';

export default class Suggest extends Component {
    static navigationOptions = {
        title: 'แนะนำ',
        tabBarIcon: ({tintColor}) => (
            <Image
                source = {require('../../../../img/favorites.png')}
                style={[
                    Styles.iconSize,
                    {tintColor:tintColor}
                ]}
            />
        ),
    };
    render(){
        return(
            <View>
                <Text>
                    Tab 2
                </Text>
            </View>
        );
    }
}