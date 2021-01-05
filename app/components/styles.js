import { StyleSheet, Platform } from 'react-native'

export default styles = StyleSheet.create({
	text: {
		color: 'tomato',
		...Platform.select({
			ios: { fontSize: 20, fontFamily: 'Avenir' },
			android: { fontSize: 18, fontFamily: 'Roboto' },
		}),
	},
})