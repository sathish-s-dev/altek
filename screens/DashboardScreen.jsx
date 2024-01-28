import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../constants/colors';
import AnnouncementSection from '../components/dashboard/AnnouncementSection';
import { StatusBar } from 'expo-status-bar';

const DashboardScreen = ({ navigation }) => {
	return (
		<LinearGradient
			// colors={[colors.inActive, colors.active, colors.inActive, colors.active]}
			colors={[colors.dark, colors.dark]}
			start={{ x: 0, y: 1 }}
			end={{ x: 1, y: 0 }}
			className='flex-1 bg-white'>
			<View className=' space-y-8 justify-center flex-1 bg-slate-700/5 px-6'>
				<View className='flex-1 justify-end'>
					<Text className='text-2xl text-inActive/80 text-center font-bold pb-2'>
						Welcome to <Text className='uppercase'>Altek</Text>
					</Text>
					<Text className='text-center font-semibold italic text-inActive/60'>
						The place to learn All Technologies.
					</Text>
				</View>
				<AnnouncementSection />
				<View className='flex-1'>
					<Button
						className={`py-1 rounded-lg font-bold`}
						buttonColor={colors.active}
						textColor={colors.inActive}
						mode='elevated'
						onPress={() => {
							navigation.jumpTo('courses');
						}}>
						View Courses
					</Button>
				</View>
			</View>
			<StatusBar style='light' />
		</LinearGradient>
	);
};

export default DashboardScreen;
