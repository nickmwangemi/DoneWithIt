import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
	return (
		<View>
			<Image
				style={styles.image}
				source={require('../assets/jacket.jpg')}
			></Image>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.price}> Ksh.1000</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/nick.jpg')}
						title='Nick Mwangemi'
						subTitle='17 Listings'
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	title: { fontSize: 24, fontWeight: '500' },
	userContainer: { marginVertical: 40 },
})
