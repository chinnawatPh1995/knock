import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        padding:5,
        flexDirection: 'column',
        backgroundColor: 'rgb(255,255,255)',
    },
    itemCenter: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconSize: {
        width: 24,
        height: 24,
    },
    textInputStyle: {
        padding: 5,
        paddingBottom: 0,
        color: 'rgb(33,33,33)',
        fontSize: 17,
        width:'100%',
    },
    listSy : {
        borderBottomColor: 'rgb(255, 84, 0)',
        borderColor: 'transparent',
        borderWidth: 1,
        padding: (14,0,16,16),
    },
    listTxt: {
        color: 'rgb(255, 84, 0)',
        fontSize: 16,
    }
});