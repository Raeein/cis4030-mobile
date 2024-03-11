import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { UserTripData, Event } from '@/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionButton from '@/components/ActionButton';

interface TripInfoToggleProps {
    events?: Event[]
}

const Stack = createNativeStackNavigator();

const TripInfoToggle: React.FC<TripInfoToggleProps> = ({ events, navigation }) => {
    return (
        <View style={styles.container}>
            { events &&
                events.map((event, index) => {
                    return (
                        <View key={index}>
                            <View key={index} style={styles.eventHeader}>
                                <View style={styles.dateHeader}>
                                    <Text style={styles.numDay}>15</Text>  
                                    <Text style={styles.day}>Mon</Text>
                                </View>
                                
                                <View style={styles.eventName}>
                                    <Text style={styles.eventNameText}>{event.name}</Text>
                                </View>
                            </View>
                        </View>

                    )
                })
            }
            
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        paddingBottom: 15,
    },
    text: {
        fontWeight: '500',
        fontSize: 50
    },
    eventHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateHeader: {
        flex: 1,
        padding: 7
    },
    numDay: {
        fontSize: 20,
        fontWeight: '700'
    },
    day: {
        fontSize: 11
    },
    eventName: {
        height: '75%',
        width: 200,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: '#F0A365',
        borderRadius: 13,
    },
    eventNameText: {
        color: 'white',
        fontWeight: '700'
    }
})

export default TripInfoToggle;