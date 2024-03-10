import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function ChatScreen() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.messages}>
                    <View style={styles.message}>
                        <View style={styles.messageContent}>
                            <Text style={styles.messageText}>Hey, how are you?</Text>
                        </View>
                    </View>
                    <View style={styles.message}>
                        <View style={styles.messageContent}>
                            <Text style={styles.messageText}>Can’t wait to meet you.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Type a message" />
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    messages: {
        marginBottom: 20,
    },
    message: {
        marginBottom: 20,
    },
    messageContent: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    sendButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    sendButtonText: {
        fontSize: 16,
    },
});