import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label} </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false} //disable autocorrect
                style={inputStyle}
                value={value}
                onChangeText={onChangeText} //사용자가 입력하는 text
                //style이 두 개 적용되면 밑에 style만 적용되어서 text를 쓸 수 없었음
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 // 2/3 차지
    },
    labelStyle: { 
        fontSize: 18,
        paddingLeft: 20,
        flex: 1 // 1/3 차지
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input }; //index.js참고



