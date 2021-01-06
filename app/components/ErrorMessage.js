import AppText from './AppText'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null

	return <AppText style={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
	error: {
		color: 'red',
		marginLeft: 15,
	},
})
