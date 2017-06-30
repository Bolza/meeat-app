import React from 'react';
import { StyleSheet, View } from 'react-native';
export const CardSection = (props) => {
    return (React.createElement(View, { style: [styles.container, props.style] }, props.children));
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
//# sourceMappingURL=card-section.component.js.map 
//# sourceMappingURL=card-section.component.js.map 
//# sourceMappingURL=card-section.component.js.map 
//# sourceMappingURL=card-section.component.js.map