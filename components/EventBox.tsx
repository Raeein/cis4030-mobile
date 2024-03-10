import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ActionButton from './ActionButton';

type TripInfo = {
    title: string,
    date: string,
    location: string
}

interface EventBoxProps {
    data: TripInfo,
    image: string
}

const EventBox: React.FC<EventBoxProps> = ({ data, image }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>{data.date}</Text>
            <Image source={require('@/assets/images/carnival.png')} style={styles.image}></Image>
            <View style={styles.btnCtnr}>
                <ActionButton title={"Add"}/>
                <ActionButton title={"Send"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        height: 400,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30
    },
    image: {
        width: '94%',
        height: 225,
        borderRadius: 15,
        marginTop: 10
    },
    title: {
        fontWeight: '700',
        fontSize: 22
    },
    date: {
        fontWeight: '400',
        paddingBottom: 10
    },
    btnCtnr: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginTop: 20
    }
})


export default EventBox;