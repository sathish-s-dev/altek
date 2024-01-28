import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	FlatList,
	useWindowDimensions,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { courses } from '../constants/data';
import CourseModal from '../components/CourseModal';
import { Button } from 'react-native-paper';
import { colors } from '../constants/colors';

const CourseScreen = () => {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [modalData, setModalData] = React.useState({});

	const height = useWindowDimensions().height;

	const scrollRef = useRef();

	// console.log(modalData);

	return (
		<View className='bg-dark'>
			<Text className='text-lg tracking-widest p-4 pb-2 text-slate-200 uppercase font-semibold'>
				Offered Courses:
			</Text>
			<ScrollView horizontal>
				{courses.map(({ image, name }, index) => (
					<TouchableOpacity
						key={`${image}-${index}`}
						className='p-4 justify-center items-center space-y-1'
						onPress={() => {
							scrollRef.current?.scrollToIndex({
								animate: true,
								index,
							});
						}}>
						<Image
							source={image}
							className='w-12 h-12 rounded-lg bg-slate-100'
							resizeMode='cover'
						/>
						<Text className='text-slate-300 pt-2'>{name}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<FlatList
				ref={scrollRef}
				data={courses}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				showsVerticalScrollIndicator={false}
				renderItem={({ item: { data, name } }) => (
					<View style={{ height: height - 250 }}>
						<Text className='text-lg text-slate-300 uppercase font-bold mt-6'>
							Available packages in {name}:
						</Text>
						<View>
							{data.map(({ title, level, details }, i) => (
								<Button
									key={`${title}-${i}`}
									onPress={() => {
										setModalVisible(true);
										setModalData({
											details,
											name,
											title,
											level,
										});
									}}
									style={{
										elevation: 4,
										shadowColor: '#000',
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity: 0.25,
										shadowRadius: 3.84,
									}}
									className='my-3 rounded-lg items-stretch justify-start space-x-2 w-full'
									mode='contained'
									buttonColor={colors.active}
									textColor={colors.inActive}>
									<Text className='w-full'>{title}</Text>
									<Text className='dark:text-slate-50 flex-1'>( {level} )</Text>
								</Button>
							))}
						</View>
					</View>
				)}
				contentContainerStyle={{
					paddingHorizontal: 14,
					paddingBottom: 250,
				}}
				ItemSeparatorComponent={
					<View className='border-b border-slate-400/50 mt-6' />
				}
			/>
			{modalVisible && modalData?.name && (
				<CourseModal
					details={modalData.details}
					name={modalData.name}
					title={modalData.title}
					isVisible={modalVisible}
					level={modalData.level}
					setModalVisible={setModalVisible}
				/>
			)}
		</View>
	);
};

export default CourseScreen;
