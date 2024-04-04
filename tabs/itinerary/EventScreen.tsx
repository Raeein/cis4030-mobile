import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function EventScreen() {
	const route = useRoute();
	const { data } = route.params;

	return (
		<View>
			<Text>{data.name.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create ({

});