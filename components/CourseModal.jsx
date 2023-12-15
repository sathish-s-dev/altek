import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CourseModal = ({
	details,
	name,
	title,
	isVisible,
	setModalVisible,
	level,
}) => {
	let value = Object.keys(details).map((key) => {
		return {
			key,
			value: details[key],
		};
	});
	console.log(value);
	const navigation = useNavigation();
	return (
		<Modal
			animationType='slide'
			className='justify-center items-center flex-1'
			transparent={true}
			onRequestClose={() => {
				setModalVisible(false);
			}}
			visible={isVisible}>
			<LinearGradient
				colors={['#030300', '#030300']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				className='justify-center bg-slate-800 mt-64 p-12 z-10 space-y-3 max-w-sm mx-auto rounded-xl'>
				<TouchableOpacity
					className='absolute right-3 top-3 bg-white rounded-full p-1'
					onPress={() => {
						setModalVisible(false);
					}}>
					<Ionicons
						name='ios-close'
						size={24}
						color='red'
					/>
				</TouchableOpacity>
				<Text className='text-slate-100 text-xl font-bold underline underline-offset-4'>
					{title} ( {level} )
				</Text>
				{value.map(({ key, value }, i) => (
					<Text
						className='text-slate-100/80 capitalize font-semibold text-[16px]'
						key={`random-${i}`}>
						{key} : {value}
					</Text>
				))}
				<View>
					<TouchableOpacity
						className='p-4 px-12 bg-rose-600 justify-center items-center mt-4 rounded-lg'
						onPress={() =>
							navigation.navigate('contact', {
								name: name,
								title: title,
								level: level,
							})
						}>
						<Text className='text-slate-100 font-bold capitalize text-[16px]'>
							request a demo
						</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</Modal>
	);
};

export default CourseModal;
