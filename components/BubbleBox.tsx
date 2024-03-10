import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface BubbleBoxProps {
    name: string
}

const BubbleBox: React.FC<BubbleBoxProps> = ({ name }) => {
    return (
        <>
            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.bubbleText}>{name}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    bubble: {
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 15,
        height: 40,
        alignSelf: 'flex-start'
    },
    bubbleText: {

    },
    bubbleTextSelected: {

    }
})


export default BubbleBox;