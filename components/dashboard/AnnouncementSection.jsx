import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { colors } from '../../constants/colors';

const AnnouncementSection = () => {
	return (
		<View className='flex-[3] items-center justify-evenly'>
			<Image
				source={require('../../assets/happy.png')}
				className='w-48 h-48 object-contain'
			/>
			<View className='flex-row items-center mx-4'>
				<Text className='text-3xl text-center font-extrabold tracking-widest text-inActive'>
					🎉 100% placements for 2023 & 2024 Freshers 🎉
				</Text>
			</View>
		</View>
	);
};

export default AnnouncementSection;
