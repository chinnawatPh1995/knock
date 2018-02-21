import React, { Component } from 'react';
import {View, Text,Image, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Styles from '../../style/styles';

export default class Home extends Component {
    static navigationOptions = {
        title: 'บันทึก',
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
                <Button
                    style={{
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        bottom: 0
                    }}
                    onPress={() => this.props.navigation.navigate('AddNote')}
                    title="เพิ่ม"
                />
            </View>  
        );
    }
}