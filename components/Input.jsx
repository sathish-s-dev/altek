import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { TextInput } from 'react-native-paper';

const Input = ({
	label,
	onChangeHandler,
	value,
	placeholder,
	...restProps
}) => {
	return (
		<TextInput
			label={label}
			underlineColor='transparent'
			activeUnderlineColor={colors.inActive}
			placeholder={placeholder}
			placeholderTextColor={'rgba(248,250,252,0.6)'}
			textColor='white'
			value={value}
			onChangeText={onChangeHandler}
			className='bg-slate-100/5 border-none rounded-lg h-18 text-sm'
			{...restProps}
		/>
	);
};

export default Input;
