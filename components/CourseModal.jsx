import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Button, IconButton } from 'react-native-paper';
import { colors } from '../constants/colors';
import { DataTable } from 'react-native-paper';

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

	const { Row, Cell } = DataTable;
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
				colors={[
					colors.inActive,
					colors.dark,
					colors.dark,
					colors.dark,
					colors.dark,
					colors.dark,
					colors.inActive,
				]}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				className='justify-center mt-60 p-10 z-10 space-y-3 max-w-lg mx-auto rounded-xl'>
				<IconButton
					className='absolute right-3 top-3  rounded-full p-1'
					icon={'close'}
					size={20}
					iconColor={colors.active}
					mode='contained'
					onPress={() => {
						setModalVisible(false);
					}}
				/>
				<DataTable>
					<DataTable.Header>
						<Text className='text-slate-100 text-lg font-bold pb-4'>
							{title} ( {level} )
						</Text>
					</DataTable.Header>
					{value.map(({ key, value }, i) => (
						<DataTable.Row
							key={`random-${i}`}
							className='border-b-2 border-slate-100'>
							<DataTable.Cell
								className='flex-1 text-start'
								centered={false}
								textStyle={{
									color: colors.inActive,
									textTransform: 'capitalize',
								}}>
								{key}
							</DataTable.Cell>
							<DataTable.Cell
								className='flex-[2]'
								textStyle={{
									color: colors.inActive,
									// textTransform: 'capitalize',
								}}>
								: {value}
							</DataTable.Cell>
						</DataTable.Row>
					))}
				</DataTable>
				<View>
					<Button
						className='justify-center items-center mt-4 rounded-lg capitalize'
						textColor={colors.inActive}
						buttonColor={colors.active}
						onPress={() => {
							setModalVisible(false);
							navigation.navigate('contact', {
								name: name,
								title: title,
								level: level,
							});
						}}>
						Request demo
					</Button>
				</View>
			</LinearGradient>
		</Modal>
	);
};

export default CourseModal;
