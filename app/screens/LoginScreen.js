import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='email'
							keybooardType='email-address'
							onChangeText={handleChange('email')}
							placeholder='Email'
							textContentType='emailAddress' /** only works on iOS */
						/>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='lock'
							onChangeText={handleChange('password')}
							placeholder='Password'
							secureTextEntry
							textContentType='password' /** only works on iOS */
						/>
						<AppButton title='Login' onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
})
