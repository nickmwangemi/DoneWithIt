import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'

import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
]

export default function AccountScreen() {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title='Nick Mwangemi'
					subTitle='nickmwangemi@gmail.com'
					image={require('../assets/nick.jpg')}
				></ListItem>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title='Log Out'
				IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: colors.light,
	},
})
