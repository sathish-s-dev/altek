// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import React, { useEffect, useRef } from 'react';
// import { courses } from '../constants/data';
// import CourseModal from '../components/CourseModal';

// const CourseScreen = () => {
// 	const [modalVisible, setModalVisible] = React.useState(false);
// 	const [modalData, setModalData] = React.useState({});
// 	useEffect(() => {
// 		console.log(viewRef.current.viewConfig);
// 	});

// 	const scrollRef = useRef();

// 	const viewRef = useRef();

// 	// console.log(modalData);

// 	return (
// 		<View className='bg-white'>
// 			<ScrollView ref={scrollRef}>
// 				<Text className='text-xl px-4 pt-4 text-slate-600 uppercase font-bold'>
// 					Courses:
// 				</Text>
// 				<ScrollView
// 					className=''
// 					horizontal>
// 					{courses.map(({ image, name }, index) => (
// 						<TouchableOpacity
// 							key={`${image}-${index}`}
// 							className='p-4 justify-center items-center space-y-1'
// 							onPress={() => {
// 								scrollRef.current?.scrollToIndex({
// 									animate: true,
// 									y: index * 350 + 50,
// 								});
// 							}}>
// 							<Image
// 								source={image}
// 								className='w-12 h-12 rounded-lg bg-slate-200'
// 								resizeMode='cover'
// 							/>
// 							<Text className='text-slate-500 pt-2'>{name}</Text>
// 						</TouchableOpacity>
// 					))}
// 				</ScrollView>
// 				<View className='px-4'>
// 					{courses.map(({ data, name }, outeri) => (
// 						<View
// 							key={`${name} - ${outeri}`}
// 							ref={viewRef}>
// 							<Text className='text-lg pt-4 text-slate-600 uppercase font-bold py-6'>
// 								Courses Available in {name}:
// 							</Text>
// 							<View>
// 								{data.map(({ title, level, details }, inner) => (
// 									<TouchableOpacity
// 										key={`${title}-${inner}`}
// 										onPress={() => {
// 											console.log(details);
// 											setModalVisible(true);
// 											setModalData({
// 												details,
// 												name,
// 												title,
// 												level,
// 											});
// 										}}
// 										className='space-y-1 p-4 bg-slate-100 shadow-2xl my-2 rounded-lg'>
// 										<Text className='text-xl text-slate-700 capitalize'>
// 											{level}
// 										</Text>
// 										<Text className='text-slate-500'>{title}</Text>
// 									</TouchableOpacity>
// 								))}
// 							</View>
// 						</View>
// 					))}
// 				</View>
// 				{modalVisible && modalData?.name && (
// 					<CourseModal
// 						details={modalData.details}
// 						name={modalData.name}
// 						title={modalData.title}
// 						isVisible={modalVisible}
// 						level={modalData.level}
// 						setModalVisible={setModalVisible}
// 					/>
// 				)}
// 			</ScrollView>
// 		</View>
// 	);
// };

// export default CourseScreen;
