import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';
import MapView, { Marker } from 'react-native-maps';
import Lottie from 'lottie-react-native';

const AboutScreen = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<LinearGradient
				colors={['#fceef2', '#fff', '#fceef2']}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				className='flex-1 justify items-start space-y-10 px-4 py-10'>
				<Image
					source={require('../assets/Altek_Logo2.png')}
					className='self-center w-32'
					resizeMode='contain'
				/>

				{/* <LinearGradient
					colors={['midnight', 'transparent', 'midnight']}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 0 }}
					className='p-4 rounded-lg self-center'> */}
				<Image
					source={require('../assets/about_mobile.png')}
					className='w-36 h-36 rounded-lg self self-center'
					resizeMode='cover'></Image>

				{/* </LinearGradient> */}

				{/* <View>
					<Lottie
						source={require('../assets/anime.json')}
						autoPlay={true}
						loop={true}
						resizeMode='cover'
						className='w-64 h-48 self-center'></Lottie>
				</View> */}

				<Text
					className='text-[16px] tracking-wide opacity-80'
					style={{ color: colors.active }}>
					{'  '}ALTEK is at its best in providing excellent training programs in
					various courses from best, experienced & Real-Time Professional
					faculties from the IT Industry
				</Text>
				<Text
					className='text-[16px] tracking-wide opacity-80'
					style={{ color: colors.active }}>
					{'  '}Providing 100% Placement Assistance for each student who
					finished Course
				</Text>
				<Text
					className='text-[16px] tracking-wide opacity-80'
					style={{ color: colors.active }}>
					{'  '}ALTEK has emerged as the Best training Institution for Java
					Fullstack (J2SE & J2EE), Aspn.net Fullstack, MERN Fullstack, Python
					Fullstack (Django) , Domain Purchase, Web Hosting, C , C# , Web
					Designing & ReactJs courses in Marathahalli, Bangalore, India
				</Text>
				<Image
					source={{ uri: 'https://www.altek.in/images/Altek_logo.png' }}
					className='self-center w-32 h-32 object-contain'
				/>
			</LinearGradient>
			<View className='mb-48 px-4 -mt-24'>
				<Text
					className='text-slate-500 text-lg uppercase tracking-widest font-bold pb-4'
					style={{ color: colors.active }}
					>
					Our Location:
				</Text>

				<MapView
					className='w-full h-64 '
					showsCompass
					showsUserLocation
					showsBuildings
					showsMyLocationButton
					provider='google'
					initialRegion={{
						latitude: 12.9593153,
						longitude: 77.6991725,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}>
					<Marker
						coordinate={{ latitude: 12.9593153, longitude: 77.6991725 }}
					/>
				</MapView>
			</View>
		</ScrollView>
	);
};

export default AboutScreen;
