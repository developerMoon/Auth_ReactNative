//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
//make it same as file name
//header : child component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
//what if we want to reuse this header component?
return (
    <View style={viewStyle}>    
        <Text style={textStyle}>{props.headerText}</Text> 
    </View>
    );
};
 //스타일 추가
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center', //가운데 정렬 위해
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, //어둡게
        elevation: 2,
        position: 'relative'
    },    
    textStyle: {
        fontSize: 20
    }
};

//make the component available to other parts of the app
export { Header }; //will import this in index.js
