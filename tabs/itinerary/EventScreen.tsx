import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import colors from '../../constants/Colors';

export default function EventScreen() {
	const route = useRoute();
	const { data } = route.params;

	const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

	return (
		<View style={styles.container}>
			<Image source={{ uri: data.logo.url }} style={styles.image}></Image>
			<View style={styles.txtContainer}>
				<Text style={styles.heading}>{data.name.text}</Text>
				<Text style={styles.split}>{formatDate(data.start.local)}</Text>
				<Text style={styles.subtitle}>Description</Text>
				<Text style={styles.split}>{data.description.text}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		padding: 15,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 250,
		marginBottom: 20,
		borderRadius: 20,
	},
	txtContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
	heading: {
        fontWeight: '800',
        fontSize: 30,
        alignSelf: 'flex-start',
		marginBottom: 10,
		color: 'black',
		// color: '#FF6600',
    },
	split: {
		marginBottom: 40,
	},
	subtitle: {
		fontWeight: '700',
        fontSize: 20,
        alignSelf: 'flex-start',
		marginBottom: 10,
	},
});