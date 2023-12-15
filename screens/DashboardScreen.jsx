import { View, Text, Button, ImageBackground, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DashboardScreen = ({ navigation }) => {
	return (
		// <LinearGradient
		// 	// Button Linear Gradient
		// 	colors={[
		// 		'transparent',
		// 		// '#FAF0F6',
		// 		'#A9234D',
		// 		//  '#FAF0F6',
		// 		'transparent',
		// 	]}
		// 	// colors={['transparent', 'transparent']}
		// 	start={{ x: 0, y: 1 }}
		// 	end={{ x: 1, y: 0 }}
		// 	className='flex-1'>
		<ImageBackground
			source={require('../assets/bg_img.png')}
			className='flex-1'>
			<View className='items-center space-y-8 justify-center flex-1 bg-slate-700/5 px-6'>
				<View className='flex-1 justify-end'>
					<Text className='text-xl text-slate-50 text-center font-bold'>
						Welcome to Altek
					</Text>
					<Text className='text-slate-50 text-center font-semibold italic'>
						The place to learn All Technologies.
					</Text>
				</View>

				<View className='flex-[3] items-center justify-evenly'>
					<Image
						source={require('../assets/happy_announcement.png')}
						className='w-48 h-48 object-contain'
					/>

					<View className='p-6 flex-row items-center mx-4'>
						{/* <Text className='pr-4 text-4xl text-center font-bold tracking-widest text-slate-50 self-start'>
						🎊
					</Text> */}

						<Text className='text-2xl text-center font-extrabold tracking-widest text-slate-50'>
							🎉 100% placements for 2023 & 2024 Freshers 🎉
						</Text>
						{/* <Text className='text-4xl text-center font-bold tracking-widest text-slate-50 pl-4 self-end'>
						🎉
					</Text> */}
					</View>
				</View>
				<View className='flex-1 justify-start'>
					<TouchableOpacity
						className='bg-slate-50 p-4 w-full px-24 rounded-lg'
						onPress={() => {
							navigation.jumpTo('courses');
						}}>
						<Text className='font-bold'>View Courses</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
};

export default DashboardScreen;
