import { FlatList, View, Text } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';

import { useWindowDimensions } from 'react-native';

export const Carousal = () => {
	const contentOffset = useSharedValue(0);

	const _renderItem = ({ item, index }) => {
		console.log(item, index);

		return (
			<CarousalItem
				item={item}
				index={index}
				contentOffset={contentOffset}
			/>
		);
	};

	return (
		<Animated.View className='bg-dark flex-1 items-end'>
			<View className=''>
				<FlatList
					className=''
					horizontal
					scrollEventThrottle={16}
					onScroll={(event) => {
						contentOffset.value = event.nativeEvent.contentOffset.x;
					}}
					showsHorizontalScrollIndicator={false}
					data={[1, 2, 3, 4, 5, 6, 7, 8]}
					renderItem={_renderItem}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={<View className='w-6' />}
				/>
			</View>
		</Animated.View>
	);
};

const CarousalItem = ({ item, index, contentOffset }) => {
	const width = useWindowDimensions().width;
	const listItemWidth = width / 3;
	const animatedStyles = useAnimatedStyle(() => {
		const inputRange = [
			(index - 1) * listItemWidth,
			index * listItemWidth,
			(index + 1) * listItemWidth,
		];
		return {
			transform: [
				{
					translateY: interpolate(
						contentOffset.value,
						inputRange,
						[0, -150, 0]
					),
				},
			],
		};
	});

	console.log('list item width:', listItemWidth);
	return (
		<Animated.View
			className=' h-36 bg-red-200 rounded-full'
			style={[animatedStyles, { width: listItemWidth }]}>
			<Text className='text-inActive'>Item</Text>
		</Animated.View>
	);
};
