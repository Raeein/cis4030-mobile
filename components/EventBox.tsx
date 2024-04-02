import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ActionButton from './ActionButton';

interface EventBoxProps {
    data: {
        name: {
            text: string;
        };
        start: {
            local: string;
        };
        end: {
            local: string;
        };
        venue: {
            address: {
                city: string;
            };
        };
        logo: {
            url: string;
        };
    };
}

const EventBox: React.FC<EventBoxProps> = ({ data }) => {
    const HandleAddEvent= () => {
        console.log('Handle See Event Info Click');
    }

    const HandleSendEvent = () => {
        console.log('Handle Send Event Click');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.name.text}</Text>
            <Text style={styles.date}>{data.start.local.substring(0, data.start.local.indexOf('T'))}</Text>
            <Image source={{ uri: data.logo.url }} style={styles.image}></Image>
            <View style={styles.btnCtnr}>
                <ActionButton title={"Add"} onPress={HandleAddEvent} />
                <ActionButton title={"Send"} onPress={HandleSendEvent}/>
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
        marginTop: 10,
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
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