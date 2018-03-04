import React, { Component } from 'react';
import {
    View, Text,
    ListView,
    TouchableHighlight
} from 'react-native';

import Styles from '../../style/styles';
import * as firebase from 'firebase';

export default class itemList extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (row1,row2) => row1 !== row2});
        this.state = {
            itemDataSource: ds
        }
        this.itemsRef = this.getRef().child('items');
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    };

    getRef = () => {
        return firebase.database().ref();
    }

    componentWillMount(){
        this.getItems(this.itemsRef);
    }
    componentDidMount(){
        this.getItems(this.itemsRef);
    }

    getItems= (itemsRef) =>{
        //let items = [{title: 'Item One'},{title: 'Item Two'}];

        itemsRef.on('value',(snap)=> {
            let items = [];
            snap.forEach((child)=>{
                items.push({
                    title: child.val().title,
                    _key: child.key
                });
            });
            this.setState({
                itemDataSource: this.state.itemDataSource.cloneWithRows(items)
            });
        });
    }

    pressRow = () =>{
        console.log(item);
    }

    renderRow = (item) =>{
        return(
            <TouchableHighlight onPress={() => {
                this.pressRow(item);
            }}>
                <View style={Styles.listSy}>
                    <Text style={Styles.listTxt}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    render() {
        return(
            <View>
                <ListView
                    dataSource = {this.state.itemDataSource}
                    renderRow = {this.renderRow}
                />
            </View>
        );
    }
}