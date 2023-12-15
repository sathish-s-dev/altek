import { View, Text } from 'react-native';
import React from 'react';

const ContactScreen = ({ route }) => {
	// console.log(route.params);
	return (
		<View className='bg-red-400 flex-1'>
			<Text className='text-lg'>
				Contact {route.params?.title} {route.params?.level} course
			</Text>
		</View>
	);
};

export default ContactScreen;
