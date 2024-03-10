import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

interface TripCollaborator {
    name: string,
    imageURL: string
}

interface UserTripData {
    name: string,
    location: string,
    dateStart: string,
    dateEnd: string,
    collaborators: TripCollaborator[]
}

interface UserTripsProps {
    data: UserTripData
}

const UserTrips: React.FC<UserTripsProps> = ({ data }) => {
    console.log(data.collaborators)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {data.name}
                <Image source={require('@/assets/images/expand-down.png')} style={styles.icon}/>
            </Text>
            <Text style={styles.details}>{data.location} {data.dateStart} {data.dateEnd}</Text>
            <View style={styles.collaborators}>
                {
                    data.collaborators.map((item) => {
                        return <Image source={require("@/assets/images/headshot1.png")}/>
                    })
                }
            </View>
        </View>
    )
}

export default UserTrips;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        paddingLeft: 25,
        paddingTop: 20
    },
    title: {
        color: '#F38957',
        fontSize: 26,
        fontWeight: '800',
        paddingBottom: 5
    },
    details: {

    },
    collaborators: {
        flex: 1,
        flexDirection: 'row',
        gap: 5,
        padding: 10
    },
    icon: {
        height: 20,
        width: 20
    }
})