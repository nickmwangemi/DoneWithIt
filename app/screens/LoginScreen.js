import * as Yup from 'yup'

import { Image, StyleSheet } from 'react-native'

import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage'
import { Formik } from 'formik'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
})

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors }) => (
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
						<ErrorMessage error={errors.email} />
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='lock'
							onChangeText={handleChange('password')}
							placeholder='Password'
							secureTextEntry
							textContentType='password' /** only works on iOS */
						/>
						<ErrorMessage error={errors.password} />

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
	errors: { color: colors.danger },
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
})
