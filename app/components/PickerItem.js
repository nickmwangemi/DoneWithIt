import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

export default function PickerItem({ label, onPress }) {
	return (
		<TouchableOpacity style={styles.text} onPress={onPress}>
			<AppText>{label}</AppText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	text: {
		padding: 20,
	},
})
