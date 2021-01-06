import React from 'react'
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput'
import Screen from './app/components/Screen'

export default function App() {
	return (
		<Screen>
			<AppPicker icon='apps' placeholder='Category' />
			<AppTextInput icon='email' placeholder='Email' />
		</Screen>
	)
}
