import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import Colors from "@/constants/Colors";

function StatSection( {number, dataType} ) {
    return (
        <View style={styles.dataSection}>
            <Text style={styles.largeText}>{number}</Text>
            <Text style={styles.smallText}>{dataType}</Text>
        </View>
    );
}

function Review({ name, image, review }) {
    return (
        <View style={styles.row}>
            <View style={styles.horizontalCenter}>
                <View style={[styles.imageContainer, styles.singleReview]}>
                    <Image style={styles.profilePic} source={image} />
                </View>
                <View style={styles.row}>
                    <Image style={[styles.fireIcon, {tintColor: '#D61919'}]} source={require('@/assets/images/fire-fill.png')} />
                    <Image style={[styles.fireIcon, {tintColor: '#D61919'}]} source={require('@/assets/images/fire-fill.png')} />
                    <Image style={[styles.fireIcon, {tintColor: '#D61919'}]} source={require('@/assets/images/fire-fill.png')} />
                    <Image style={[styles.fireIcon, {tintColor: '#D61919'}]} source={require('@/assets/images/fire-fill.png')} />
                    <Image style={[styles.fireIcon, {tintColor: '#DDDFE5'}]} source={require('@/assets/images/fire-fill.png')} />
                </View>
            </View>
            <View style={styles.horizontalCenter}>
                <Text style={styles.reviewText}>"{review}"</Text>
                <Text style={styles.userText}>- {name}</Text>
            </View>
        </View>
    );
}

function changeLocation() {
    // Code to change trip location
}

function LocationButton( ) {
    return (
        <TouchableOpacity style={styles.locationBtn} onPress={changeLocation}>
            <Text style={styles.locBtnText}>Vietnam</Text>
            <Image style={styles.arrow} source={require('@/assets/images/down-arrow-icon.png')} />
        </TouchableOpacity>
    );
}

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.locationBtnContainer}>
                <LocationButton></LocationButton>
            </View>  
            <View style={[styles.profileContainer, {width: '100%', height: '85%'}]}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>

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
                            <StatSection
                                number={'15'}
                                dataType={'Guided trips'}
                            />
                            <StatSection
                                number={'100'}
                                dataType={'People guided'}
                            />
                            <StatSection
                                number={'20'}
                                dataType={'Reviews'}
                            />
                        </View>
                    </View>

                    <View style={styles.languageContainer}>
                        <Text style={styles.subtitle}>Languages</Text>
                        <View style = {styles.row}>
                            <Text style={styles.normalText}>English, </Text>
                            <Text style={styles.normalText}>French, </Text>
                            <Text style={styles.normalText}>Portuguese, </Text>
                            <Text style={styles.normalText}>Russian </Text>
                        </View>
                    </View>

                    <View style={styles.tripTypeContainer}>
                        <Text style = {styles.subtitle}>Types of Trips</Text>
                    </View>

                    <View style={styles.reviewsContainer}>
                        <Text style = {styles.subtitle}>Past Trip Reviews</Text>

                        <Review 
                            name={"Jenny P"}
                            image={require('@/assets/images/temp-profile-2.png')}
                            review={"Kelly was great!"}
                        />

                        <Review 
                            name={"Timmy L"}
                            image={require('@/assets/images/temp-profile-3.png')}
                            review={"Super chill woman"}
                        />

                        <Review 
                            name={"Guy S"}
                            image={require('@/assets/images/temp-profile-1.png')}
                            review={"Kelly was great!"}
                        />

                    </View>
                </ScrollView>
            </View>

            <View style={styles.likeContainer}>
                <TouchableOpacity>
                    <Image style={styles.likeIcon} source={require('@/assets/images/check-icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.likeIcon} source={require('@/assets/images/X-icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
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
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 0,
        marginTop: 0,
        borderRadius: 15,
        position: 'absolute',
    },
    statContainer: {
        width: '95%',
        height: 80,
        padding: 10,
        marginBottom: 15,
        borderRadius: 13,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '95%',
        height: 300,
        padding: 25,
        marginBottom: 15,
        borderRadius: 13,
        backgroundColor: '#fff',
    },
    reviewsContainer: {
        width: '95%',
        height: 400,
        padding: 25,
        marginBottom: 15,
        borderRadius: 13,
        backgroundColor: '#fff',
    },
    imageContainer: {
        marginTop: 30,
        backgroundColor: "#2f95dc",
        padding: 10,
        width: 130,
        height: 130,
        borderRadius: 90,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: '150%',
        height: '150%',
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
    reviewText: {
        fontSize: 20, 
        fontWeight: 'bold',
    },
    userText: {
        fontSize: 13, 
        textAlign: 'right',
    },
    singleReview: {
        width: 60, 
        height: 60, 
        marginBottom: 5, 
        marginRight: 20,
    },
});