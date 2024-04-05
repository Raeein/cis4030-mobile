import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { UserTripData } from '@/types';
import TripInfoToggle from '@/components/TripInfoToggle';
import ActionButton from './ActionButton';

interface UserTripsProps {
    data: UserTripData,
    navigation: {
        navigate: (screen: string) => void;
    }
}

const UserTrips: React.FC<UserTripsProps> = ({ data, navigation }) => {
    const [showInfo, setInfo] = useState(false);
    const onPress = () => setInfo(!showInfo);
    const HandleSeeSchedule = () => {
        navigation.navigate('Schedule')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {data.name}
                <TouchableOpacity onPress={onPress}>
                    <Image source={require('@/assets/images/expand-down.png')} style={styles.icon}/>
                </TouchableOpacity>
                
            </Text>
            <Text style={styles.details}>{data.location} {data.dateStart} {data.dateEnd}</Text>
            <View style={styles.collaborators}>
                {
                    data.collaborators.map((item, index) => {
                        return <Image key={index} source={require("@/assets/images/headshot1.png")}/>
                    })
                }
            </View>
            {
                showInfo && <TripInfoToggle events={data.events}/>
            }
          
            <ActionButton 
                title={"See Full Schedule"} 
                onPress={HandleSeeSchedule}
                buttonColor={'#F38957'}
                textColor='white'
                borderRadius={10}
                width={200}
            />
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
        marginTop: 10,
        marginBottom: 10,
    },
    icon: {
        height: 20,
        width: 20
    }
})