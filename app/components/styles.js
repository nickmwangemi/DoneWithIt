import { StyleSheet, Platform } from 'react-native'
import colors from '../config/colors'

export default styles = StyleSheet.create({
	text: {
		color: colors.dark,
		...Platform.select({
			ios: { fontSize: 20, fontFamily: 'Avenir' },
			android: { fontSize: 18, fontFamily: 'Roboto' },
		}),
	},
})
