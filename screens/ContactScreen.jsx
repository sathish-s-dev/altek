import { View, Text, Image } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { z } from 'zod';
import { Toast } from 'expo-react-native-toastify';
import { colors } from '../constants/colors';

const formSchema = z.object({
	email: z
		.string()
		.email({ message: 'Please enter a valid email' })
		.endsWith('.com'),
	name: z.string().nonempty({ message: 'Name is required' }).min(3).max(40),
	contact: z
		.string()
		.min(10, { message: 'Please enter a valid phone numbers' })
		.max(10, { message: 'Please enter a only 10 numbers' }),
	course: z.string().nonempty({ message: 'Course is required' }),
});

const ContactScreen = ({ route }) => {
	const [form, setForm] = React.useState({
		name: '',
		email: '',
		contact: '',
		course: route.params?.title,
	});

	useEffect(() => {
		if (route.params?.title) {
			setForm({
				...form,
				course: route.params?.title,
			});
		}
	}, [route.params?.title]);
	// console.log(form);

	const handleSubmit = useCallback(() => {
		try {
			formSchema.parse(form);
			console.log(form);
			Toast.success('submitted successfully.');
			setForm({
				name: '',
				email: '',
				contact: '',
				course: '',
			});
		} catch (error) {
			Toast.warn(error.issues[0].message);
			console.log(error.issues);
		}
	}, [form]);

	return (
		<View className=' flex-1 px-4  justify-center items-center'>
			<View className='max-w-xs w-full justify-center space-y-3'>
				<Text className='text-lg text-slate-600 font-bold uppercase pb-6'>
					Request For Demo:
					{/* {route.params?.title} {route.params?.level} course */}
				</Text>
				<TextInput
					placeholder='example@gmail.com'
					placeholderTextColor={'gray'}
					underlineColor='transparent'
					activeUnderlineColor={colors.active}
					label='Email'
					value={form.email}
					keyboardType='email-address'
					onChangeText={(value) => setForm({ ...form, email: value })}
					className='bg-red-100/50 border-none rounded-lg h-18 text-sm'
				/>
				<TextInput
					label='Name'
					underlineColor='transparent'
					activeUnderlineColor={colors.active}
					placeholder='John Doe'
					placeholderTextColor={'gray'}
					value={form.name}
					onChangeText={(value) => setForm({ ...form, name: value })}
					className='bg-red-100/50 border-none rounded-lg h-18 text-sm'
				/>
				<TextInput
					placeholder='8092265005'
					label={'Contact'}
					underlineColor='transparent'
					activeUnderlineColor={colors.active}
					outlineColor={colors.active}
					placeholderTextColor={'gray'}
					keyboardType='number-pad'
					value={form.contact}
					onChangeText={(value) => setForm({ ...form, contact: value })}
					className='bg-red-100/50 border-none rounded-lg h-18 text-sm'
				/>
				<TextInput
					placeholder='interested course'
					underlineColor='transparent'
					activeUnderlineColor={colors.active}
					placeholderTextColor={'gray'}
					value={form.course}
					onChangeText={(value) => setForm({ ...form, course: value })}
					className='bg-red-100/50 outline-1 outline-red-500 rounded-lg h-18 text-sm'
				/>
				<Button
					mode='elevated'
					textColor={colors.inActive}
					buttonColor={colors.active}
					onPress={handleSubmit}
					className={' rounded-lg'}>
					submit
				</Button>
			</View>
			<View>
				<Image
					source={require('../assets/contact.png')}
					className='w-52 h-52'
					resizeMode='contain'
				/>
			</View>
		</View>
	);
};

export default ContactScreen;
