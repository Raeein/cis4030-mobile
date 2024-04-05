import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Button } from 'react-native';
import Colors from "@/constants/Colors";
import { supabase } from '@/lib/supabase';
import AsyncStorage from "@react-native-async-storage/async-storage";


const tripTypes = [
    {source: require('@/assets/images/nature-icon.png'), text: "nature"},
    {source: require('@/assets/images/culinary-icon.png'), text: "culinary"},
    {source: require('@/assets/images/historical-icon.png'), text: "historical"},
    {source: require('@/assets/images/music-icon.png'), text: "music"}
];

/* Component for displaying profile's statistics */
function StatSection( {number, dataType} ) {
    return (
      <View style={styles.dataSection}>
          <Text style={styles.largeText}>{number}</Text>
          <Text style={styles.smallText}>{dataType}</Text>
      </View>
    );
}


/* Grid of icons for trip types */
const TripTypeGrid = () => {
    return (
      <View style={styles.tripTypeContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tripTypesScrollView}>
              {tripTypes.map((item, index) => (
                <View key={index} style={styles.tripTypeItem}>
                    <Image source={item.source} style={styles.tripTypeIcon} />
                    <Text style={styles.tripTypeText}>{item.text}</Text>
                </View>
              ))}
          </ScrollView>
      </View>
    );
};


function CompactReview({ name, image, review }) {
    return (
      <View style={styles.compactReviewContainer}>
          <Image source={image} style={styles.compactReviewImage} />
          <View style={styles.reviewTextContainer}>
              <Text style={styles.reviewText}>{review}</Text>
              <Text style={styles.userText}>- {name}</Text>
          </View>
      </View>
    );
}

export default function EditProfileScreen() {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout failed:', error.message);
        } else {
            console.log('Logged out successfully');
        }
    };
        
    const handleClearStorage = async () => {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            console.error('Failed to clear AsyncStorage:', e);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.profileContainer, {width: '100%', height: '85%'}]}>
                    <View style={[styles.imageContainer, {marginBottom: 15}]}>
                        <Image style={styles.profilePic} source={require('@/assets/images/temp-profile-pic.png')} />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>Kelly</Text>
                        <Image style={styles.check} source={require('@/assets/images/verification-icon.png')} />
                    </View>
                    <Text style={styles.ageText}>39</Text>

                    <View style={styles.statContainer}>
                        <View style={styles.row}>
                            <StatSection number={'15'} dataType={'Guided trips'} />
                            <StatSection number={'100'} dataType={'People guided'} />
                            <StatSection number={'20'} dataType={'Reviews'} />
                        </View>
                    </View>

                    <View style={styles.languageContainer}>
                        <Text style={styles.subtitle}>Languages</Text>
                        <View style={styles.row}>
                            <Text style={styles.normalText}>English, </Text>
                            <Text style={styles.normalText}>French, </Text>
                            <Text style={styles.normalText}>Portuguese, </Text>
                            <Text style={styles.normalText}>Russian </Text>
                        </View>
                    </View>

                    <View style={styles.tripTypeContainer}>
                        <Text style={styles.subtitle}>Types of Trips</Text>
                        <TripTypeGrid />
                    </View>

                    <View style={styles.reviewsContainer}>
                        <Text style={styles.subtitle}>Past Trip Reviews</Text>
                        <ScrollView nestedScrollEnabled={true} style={{flexGrow: 0, maxHeight: 100}}>
                            <CompactReview name={"Jenny P"} image={require('@/assets/images/temp-profile-2.png')} review={"Kelly was great!"} />
                            <CompactReview name={"Timmy L"} image={require('@/assets/images/temp-profile-3.png')} review={"Super chill woman"} />
                            <CompactReview name={"Guy S"} image={require('@/assets/images/temp-profile-1.png')} review={"Let her guide you"} />
                        </ScrollView>
                    </View>
                </View>
            </View>
            <Button title="Logout" onPress={handleLogout} />
            <View style={styles.buttonSpacing} />
            <Button title="Clear Storage" onPress={handleClearStorage} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Align content to the top
        padding: 10, // Reduced padding
        backgroundColor: '#fff',
    },
    card: {
        height: '100%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    row: {
        flexDirection: 'row',
    },
    verticalCenter: {
        justifyContent: 'center',
    },
    horizontalCenter: {
        justifyContent: 'center',
    },
    locationBtnContainer: {
        top: 5,
        position: 'absolute',
    },
    locationBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 5,
        minWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    locBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 10,
        color: '#ffffff',
    },
    arrow: {
        width: 20,
        height: 20,
    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 5,
    },
    profileContainer: {
        width: '100%', // Ensure full width utilization
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 10, // Reduced padding
        borderRadius: 15,
    },
    statContainer: {
        width: '90%', // Adjusted width
        minHeight: 60, // Adjusted height
        padding: 5, // Reduced padding
        flexDirection: 'row', // Arrange items in a row
        justifyContent: 'space-around', // Space items evenly
        marginBottom: 10, // Reduced margin
        borderRadius: 13,
        backgroundColor: '#fff',
    },
    languageContainer: {
        width: '95%',
        height: 80,
        padding: 25,
        marginBottom: 15,
        borderRadius: 13,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
      tripTypeContainer: {
          height: 80, // Adjusted height to accommodate a single row
          width: '90%',
          alignSelf: 'center',
          marginBottom: 10,
      },
    imageContainer: {
        marginTop: 10, // Reduced margin
        backgroundColor: "#2f95dc",
        padding: 5, // Reduced padding
        width: 100, // Reduced size
        height: 100, // Reduced size
        borderRadius: 50, // Adjusted for reduced size
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: '100%', // Adjusted for container size
        height: '100%', // Adjusted for container size
        resizeMode: 'cover',
    },
    nameContainer: {
        flexDirection: 'row',
    },
    nameText: {
        fontSize: 35,
        marginRight: 8,
        marginBottom: 10,
    },
    check: {
        width: 20,
        height: 20,
        top: 13,
    },
    ageText: {
        fontSize: 18,
        marginBottom: 20,
    },
    dataSection: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    largeText: {
        fontSize: 20,
        paddingRight: 25,
        paddingLeft: 25,
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    normalText: {
        fontSize: 15,
    },
    likeContainer: {
        flexDirection: 'row',
        marginBottom: -670,
    },
    likeIcon: {
        width: 60,
        height: 60,
    },
    fireIcon: {
        width: 25,
        height: 25,
        margin: -5,
    },
    singleReview: {
        width: 60,
        height: 60,
        marginBottom: 5,
        marginRight: 20,
    },
    flatListContent: {
        alignItems: 'center',
    },
    gridContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    gridItemContainer: {
        width: '30%',
        marginVertical: 5,
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    gridText: {
        marginTop: 5,
        textAlign: 'center',
    },
    tripTypesScrollView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tripTypeItem: {
        alignItems: 'center',
        marginRight: 20, // Adjust spacing between items
    },
    tripTypeIcon: {
        width: 40, // Reduced icon size
        height: 40, // Reduced icon size
        marginBottom: 5, // Adjust spacing
    },
    tripTypeText: {
        fontSize: 12, // Adjust font size for compactness
    },
    compactReviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginBottom: 5,
    },
    compactReviewImage: {
        width: 50, // Smaller image size
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    reviewTextContainer: {
        flex: 1,
    },
    reviewText: {
        fontSize: 14, // Smaller font size
        fontWeight: 'bold',
    },
    userText: {
        fontSize: 12, // Smaller font size
    },
    // Keep other styles as previously defined
    reviewsContainer: {
        width: '90%',
        minHeight: 100, // Adjust based on your needs
        maxHeight: 200, // Set a maximum height to ensure it fits on screen
        overflow: 'hidden', // Hide overflow
        padding: 10,
        marginBottom: 10,
        borderRadius: 13,
        backgroundColor: '#fff',
    },
});