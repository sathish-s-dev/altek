import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Toast } from 'expo-react-native-toastify';

const PlacementScreen = () => {
	useEffect(() => {
		Toast.error('PlacementScreen is under construction');
	}, []);
	return (
		<View className={'flex-1 justify-center items-center bg-dark'}>
			<Text className='text-inActive'>under maintanace please wait...</Text>
		</View>
	);
};

export default PlacementScreen;
