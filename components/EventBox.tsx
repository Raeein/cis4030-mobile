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
        description: {
           text: string; 
        };
        organizer: {
            name: string;
        };
        summary: string;
    };
    onClick: (event: any) => void;
}

const EventBox: React.FC<EventBoxProps> = ({ data, onClick }) => {
    const HandleAddEvent= () => {
        console.log('Handle See Event Info Click');
    }

    const HandleSendEvent = () => {
        console.log('Handle Send Event Click');
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
               <Text style={styles.title}>{data.name.text}</Text> 
            </View>
            <Text style={styles.date}>{formatDate(data.start.local.substring(0, data.start.local.indexOf('T')))}</Text>
            <TouchableOpacity style={styles.imgWrapper} onPress={() => onClick(data)}>
                <Image source={{ uri: data.logo.url }} style={styles.image}></Image>
            </TouchableOpacity>
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
        height: 450,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30,
        marginBottom: 10,
    },
    imgWrapper: {
        width: '94%',
        height: 225,
        borderRadius: 15,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        // width: '94%',
        // height: 225,
        borderRadius: 15,
        // marginTop: 10,
    },
    titleBox: {
        height: 70
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
        paddingLeft: 10,
        paddingRight: 10,
    },
    date: {
        fontWeight: '400',
        paddingBottom: 10
    },
    btnCtnr: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginTop: 20,
    }
})


export default EventBox;