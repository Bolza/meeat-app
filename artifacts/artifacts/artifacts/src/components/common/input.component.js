import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export const Input = (props) => {
    return (React.createElement(View, { style: styles.container }, React.createElement(Text, { style: styles.label }, props.label), React.createElement(TextInput, { placeholder: props.placeholder, autoCorrect: false, secureTextEntry: props.secure, value: props.value, onChangeText: props.onChangeText, style: styles.textinput })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        height: 40,
        alignItems: 'center',
    },
    label: {
        flex: 1,
        paddingLeft: 20,
        fontSize: 18,
    },
    textinput: {
        flex: 2,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
    }
});
//# sourceMappingURL=input.component.js.map 
//# sourceMappingURL=input.component.js.map 
//# sourceMappingURL=input.component.js.map