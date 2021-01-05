import React from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export default function Screen({ children }) {
	return (
		<SafeAreaView style={styles.screen}>
			<View>{children}</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
})
