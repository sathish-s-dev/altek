import {
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
	Pressable,
	ScrollView,
	Platform,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { z } from 'zod';
import { Toast } from 'expo-react-native-toastify';
import { colors } from '../constants/colors';
import Input from '../components/Input';

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

		return () => {
			setForm({
				name: '',
				email: '',
				contact: '',
				course: '',
			});
		};
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
		<KeyboardAvoidingView
			className='flex-1 bg-dark w-full'
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<View
				className=' flex-1 px-4 items-center justify-center'
				style={{ backgroundColor: colors.dark }}>
				<View className='max-w-xs w-full justify-center self-center space-y-5'>
					<Text className='text-lg text-slate-100 font-bold uppercase pb-6'>
						Request For Demo:
						{/* {route.params?.title} {route.params?.level} course */}
					</Text>

					<Input
						label='Email'
						value={form.email}
						placeholder='example@gmail.com'
						onChangeHandler={(value) => setForm({ ...form, email: value })}
					/>
					<Input
						label='Name'
						placeholder='John Doe'
						value={form.name}
						onChangeHandler={(value) => setForm({ ...form, name: value })}
					/>
					{/* <TextInput
						placeholder='8092265005'
						label={'Contact'}
						underlineColor='transparent'
						activeUnderlineColor={colors.inActive}
						outlineColor={colors.inActive}
						placeholderTextColor={'rgba(248,250,252,0.6)'}
						textColor='white'
						keyboardType='number-pad'
						value={form.contact}
						onChangeText={(value) => setForm({ ...form, contact: value })}
						className='bg-slate-100/5 border-none rounded-lg h-18 text-sm'
					/> */}
					<Input
						label='Contact Number'
						placeholder='0000000000'
						onChangeHandler={(value) => setForm({ ...form, contact: value })}
						keyboardType='number-pad'
						value={form.contact}
					/>
					<Input
						label='Interested course'
						placeholder='React Js developer'
						onChangeHandler={(value) => setForm({ ...form, course: value })}
						value={form.course}
					/>
					{/* <TextInput
						placeholder='interested course'
						underlineColor='transparent'
						activeUnderlineColor={colors.inActive}
						label='Course'
						placeholderTextColor={'rgba(248,250,252,0.6)'}
						textColor='white'
						value={form.course}
						onChangeText={(value) => setForm({ ...form, course: value })}
						className='bg-slate-100/5 outline-1 outline-red-500 rounded-lg h-18 text-sm'
					/> */}
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
		</KeyboardAvoidingView>
	);
};

export default ContactScreen;
