import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	FlatList,
	StyleSheet,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { courses } from '../constants/data';
import CourseModal from '../components/CourseModal';

const CourseScreen = () => {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [modalData, setModalData] = React.useState({});

	const scrollRef = useRef();

	// console.log(modalData);

	return (
		<View className='bg-white'>
			<Text className='text-xl p-4 pb-2 text-slate-600 uppercase font-bold'>
				Courses:
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
							className='w-12 h-12 rounded-lg bg-slate-200'
							resizeMode='cover'
						/>
						<Text className='text-slate-500 pt-2'>{name}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<FlatList
				ref={scrollRef}
				data={courses}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				renderItem={({ item: { data, name } }) => (
					<View>
						<Text className='text-lg text-slate-600 uppercase font-bold mt-6'>
							Available Courses in {name}:
						</Text>
						<View>
							{data.map(({ title, level, details }, i) => (
								<TouchableOpacity
									key={`${title}-${i}`}
									onPress={() => {
										console.log(details);
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
									className='space-y-1 p-4 dark:bg-rose-700 bg-slate-200  my-2 rounded-lg flex-row items-center space-x-2'>
									<Text className='text-[18px] dark:text-slate-50 capitalize'>
										{title}
									</Text>
									<Text className='dark:text-slate-50'>( {level} )</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>
				)}
				contentContainerStyle={{
					paddingHorizontal: 14,
					paddingBottom: 250,
				}}
				ItemSeparatorComponent={
					<View className=' border-b border-slate-400/50 mt-6' />
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
