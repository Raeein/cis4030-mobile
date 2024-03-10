import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

export default function MatchesScreen({ navigation }) {
  const randomMatches = 10;

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchPlaceholderImages = () => {
      const placeholderImages = Array.from({ length: randomMatches }, (_, index) => ({
        name: uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals], length: 2 }),
        image: { uri: `https://picsum.photos/300?random=${index}` },
      }));
      setMatches(placeholderImages);
    };
    fetchPlaceholderImages();
  }, []);

  const truncateName = (name) => {
    return name.length > 10 ? `${name.substring(0, 10)}...` : name;
  };

  const messages = [
    { name: 'Trevor', message: 'WHERE IS MA MONEY??', unreadCount: 9, image: 'https://picsum.photos/300?random=1' },
    { name: 'Bob', message: 'Hey, how are you?', unreadCount: 1, image: 'https://picsum.photos/300?random=2' },
    { name: 'Alice', message: 'I’m good, thanks!', unreadCount: 1, image: 'https://picsum.photos/300?random=3' },
    { name: 'Charlie', message: 'See you soon!', unreadCount: 2, image: 'https://picsum.photos/300?random=4' },
    { name: 'David', message: 'Hi!', unreadCount: 11, image: 'https://picsum.photos/300?random=5' },
    { name: 'Eve', message: 'Yes im here', unreadCount: 0, image: 'https://picsum.photos/300?random=6' },
  ];

  const handleMessagePress = (message) => {
    navigation.navigate('Chat', { userName: message.name, userImage: message.image });
  };


  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.matchesTitle}>New Matches</Text>
        <ScrollView horizontal style={styles.matchesList}>
          {matches.map((match, index) => (
            <TouchableOpacity key={index} style={styles.matchItem}>
              <Image source={match.image} style={styles.matchImage} />
              <Text style={styles.matchName}>{truncateName(match.name)}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.messagesTitle}>Messages</Text>
        {messages.map((message, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.messageItem}
              onPress={() => handleMessagePress(message)}
            >
              <Image source={{ uri: message.image }} style={styles.messageImage} />
              <View style={styles.messageContent}>
                <Text style={styles.messageName}>{message.name}</Text>
                <Text style={styles.messagePreview}>{message.message}</Text>
              </View>
              {message.unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>{message.unreadCount}</Text>
                </View>
              )}
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Replace with your app's background color
  },
  header: {
    height: 60, // Replace with your header height
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Replace with your app's header color
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff', // Replace with your app's logo color
  },
  content: {
    padding: 10,
  },
  matchesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Replace with your app's text color
    paddingVertical: 10,
  },
  matchesList: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  matchItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  matchImage: {
    width: 80, // Increased width for a rectangular shape
    height: 100, // Height can be less than width for a rectangular shape
    borderRadius: 10, // Smaller borderRadius for rounded corners
    borderWidth: 2, // Optional, if you want a border
    borderColor: '#000', // Optional, if you want a border
    resizeMode: 'cover', // Ensures the image covers the frame
  },
  matchName: {
    color: '#000', // Replace with your app's text color
  },
  messagesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Replace with your app's text color
    paddingTop: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  messageImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageName: {
    fontWeight: 'bold',
    color: '#000', // Replace with your app's text color
  },
  messagePreview: {
    color: '#888', // Replace with your app's secondary text color
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadCount: {
    color: '#fff',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc', // This is the color of the separator
    alignSelf: 'flex-end', // This aligns the separator to the right side
    width: '85%', // This sets the separator width to 60% of its container's width
    marginTop: 10, // Space above the separator
    marginBottom: 10, // Space below the separator
  },
});
