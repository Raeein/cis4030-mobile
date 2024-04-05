import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useRoute } from "@react-navigation/native";
import DropDownSelect from "@/components/DropDownSelect";
import DateTimePicker from '@react-native-community/datetimepicker';
import userTripData from '@/assets/info/userTrips.json';
import cities from '@/assets/info/cities.json';
// import ActionButton from "@/components/ActionButton";

const AddTripScreen = ({ route, navigation }) => {
    const trips = userTripData.trips;
	const { selectedCity } = route.params;

    const [tripName, setTripName] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

	const onChangeStartDate = (event, selectedDate) => {
		const currentDate = selectedDate || startDate;
		setStartDate(currentDate);
	}

    const onChangeEndDate = (event, selectedDate) => {
		const currentDate = selectedDate || endDate;
		setEndDate(currentDate);
	}

    
    const HandleAddTrip = () => {
        console.log('Add trip');

        if (!tripName) {
            Alert.alert('Please give your trip a name.');
            return;
        }

        const newTrip = {
            name: tripName,
            location: location,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        }

        navigation.navigate('Events');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Trip</Text>
            <View style={styles.row}>
                <Text style={styles.h1}>Name:</Text> 
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} onChangeText={setTripName}></TextInput>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.h1}>Location:</Text>
                <View style={styles.dropDownContainer}>
                    <DropDownSelect
                        item={cities}
                        boxColor="#F38957"
                        textColor="#FFFFFF"
                        boxText={selectedCity}
                        select={setLocation}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.h1}>Start date: </Text>
                <DateTimePicker
                        style={styles.datePicker}
                        testID="dateTimePicker"
                        value={startDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeStartDate}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.h1}>End date: </Text>
                <DateTimePicker
                        style={styles.datePicker}
                        testID="dateTimePicker"
                        value={endDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeEndDate}
                />
            </View>
            <Text style={styles.h1}>Send Collaboration Invites</Text>
            <View style={styles.collabCtnr}>
                <View style={styles.collabRow}>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.collabRow}>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.addBtn} 
                onPress={HandleAddTrip}>
                <Text style={styles.addBtnText}>Finish Trip</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 30
    },
    title: {
        fontSize: 30,
        color: '#FD4802',
        fontWeight: '700'
    },
    h1: {
        fontSize: 22,
        color: 'black',
        fontWeight: '700',
        paddingTop: 17,
        paddingBottom: 0
    },
    p: {
        fontSize: 18,
        fontWeight: '300'
    },
    collabCtnr: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        height: 500,
        paddingTop: 10,
    },
    collabRow: {
        flex: 1,
        gap: 20,
    },
    collabCell: {      
        height: 70,
        width: '100%',  
        backgroundColor: '#D9D9D9',
        justifyContent: 'center'
    },
    icon: {
        // height: 10
    },
    addText: {
        alignSelf: 'center',
    },
    addBtn: {
        marginBottom: 20,
        height: 60,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#F38957',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    addBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        width: 250,
        marginLeft: 20
    },
    inputContainer2: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        width: 225,
        marginLeft: 20
    },
    row: {
        flexDirection: 'row'
    },
    input: {
        fontSize: 20
    },
    datePicker: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    dropDownContainer: {
        width: 175,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 5,
    }
})

export default AddTripScreen;