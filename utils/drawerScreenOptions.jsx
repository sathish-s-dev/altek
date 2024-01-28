import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../constants/colors';
import { Image, TouchableOpacity } from 'react-native';

export const drawerScreenOptions = (icon, label) => {
	const options = {
		drawerIcon: ({ focused }) => (
			<MaterialIcons
				name={icon}
				size={18}
				color={focused ? colors.inActive : colors.inActive}
				style={{ marginRight: -20, marginLeft: 10 }}
			/>
		),
	};

	if (label) {
		options.drawerLabel = label;
	}
	return options;
};

export const navigatorOptions = (navigation) => ({
	headerRight: () => (
		<TouchableOpacity
			style={{ paddingRight: 16 }}
			onPress={() => navigation.navigate('dashboard')}>
			<Image
				source={require('../assets/Altek_Logo3.png')}
				style={{ width: 80, height: 50 }}
				resizeMode='contain'
			/>
			{/* <Text className='text-xl uppercase text-[#A9234D] font-extrabold italic'>
        Altek
      </Text> */}
		</TouchableOpacity>
	),
	headerTitle: '',
	// headerShadowVisible: false,
	drawerActiveBackgroundColor: colors.active,
	drawerActiveTintColor: colors.inActive,
	drawerInactiveTintColor: colors.inActive,
	drawerContentContainerStyle: {
		paddingTop: 80,
		backgroundColor: colors.dark,
		flex: 1,
		rowGap: 12,
	},

	drawerLabelStyle: {
		fontWeight: '700',
		fontSize: 16,
		textTransform: 'capitalize',
	},
	headerTintColor: colors.inActive,
	headerStyle: {
		backgroundColor: colors.dark,
		// backgroundOpacity: 50,
		shadowColor: '#fff',
		shadowOpacity: 0.3,
		shadowOffset: {
			x: 10,
			y: 10,
		},

		// borderBottomColor: '#FFF',
	},
	drawerStyle: {
		backgroundColor: colors.dark,
		elevation: 5,
	},
});
