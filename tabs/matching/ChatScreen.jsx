import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default function ChatScreen({ route, navigation }) {
    const { userName, userImage } = route.params;


    const [messages, setMessages] = useState([
        { id: 1, text: "Hey, how are you?", isSender: true },
        { id: 2, text: "Can’t wait to meet you.", isSender: false },
    ]);

    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim().length > 0) {
            const newMessage = {
                id: messages.length + 1,
                text: text,
                isSender: true,
            };

            // Update the messages state
            setMessages([...messages, newMessage]);

            setText('');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
            <View style={styles.header}>
                <Image source={{ uri: userImage }} style={styles.userImage} />
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <ScrollView style={styles.content}
                // Add this to scroll to the bottom every time messages update
                        ref={ref => {this.scrollView = ref}}
                        onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
            >
                <View style={styles.messages}>
                    {messages.map((message) => (
                        <View key={message.id} style={styles.message}>
                            <View style={message.isSender ? styles.senderMessageContent : styles.receiverMessageContent}>
                                <Text style={styles.messageText}>{message.text}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message"
                    value={text}
                    onChangeText={setText} // Update text state on change
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center the items horizontally
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10, // Add some space between the image and the text
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // Circular image
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
    senderMessageContent: {
        padding: 10,
        backgroundColor: '#007bff', // Light blue for the sender
        borderRadius: 10,
        alignSelf: 'flex-end', // Align to the right
    },
    receiverMessageContent: {
        padding: 10,
        backgroundColor: '#f0f0f0', // Light gray for the receiver
        borderRadius: 10,
        alignSelf: 'flex-start', // Align to the left
    },
    messageText: {
        fontSize: 16,
        color: '#000', // Black text color
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
        backgroundColor: '#007bff', // Matching the sender's message color
        borderRadius: 10,
    },
    sendButtonText: {
        fontSize: 16,
        color: '#fff', // White text color for the button
    },
});
