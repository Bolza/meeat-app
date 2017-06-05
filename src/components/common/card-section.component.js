import React from 'react';
import { StyleSheet, View } from 'react-native';

export const CardSection = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    }
});
