import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

interface ActionButtonProps {
    title: string,
    buttonColor?: string,
    textColor?: string,
    onPress: () => void,
    height?: number 
    width?: number,
    borderRadius?: number,
    alignSelf?: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, buttonColor, textColor, onPress, height, width, borderRadius, alignSelf }) => {
    return (
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: buttonColor ?? '#D9D9D9', height: height ?? 40, width: width ?? 140, borderRadius: borderRadius ?? 20 }]} 
            onPress={onPress}>
            <Text style={[styles.title, { color: textColor ?? 'black' }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 140,
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
    },
    title: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16
    }
})


export default ActionButton;