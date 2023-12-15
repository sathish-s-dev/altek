import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import {
	createDrawerNavigator,
	useDrawerStatus,
	DrawerToggleButton,
} from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
// import CourseScreen from '../screens/CourseScreen';
import CourseScreen from '../screens/CourseScreen1';
import ContactScreen from '../screens/ContactScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AboutScreen from '../screens/AboutScreen';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const navigation = useNavigation();
	console.log(navigation);
	return (
		<Drawer.Navigator
			screenOptions={{
				headerRight: () => (
					<TouchableOpacity
						className='pr-4'
						onPress={() => navigation.navigate('dashboard')}>
						{/* <Image
							source={require('../assets/Altek_Logo.png')}
							style={{ width: 80, height: 50 }}
							resizeMode='contain'
						/> */}
						<Text className='text-xl uppercase text-red-500 font-extrabold italic'>
							Altek
						</Text>
					</TouchableOpacity>
				),
				headerTitle: '',
				headerShadowVisible: false,
				drawerInactiveBackgroundColor: colors.inActive,
				drawerActiveBackgroundColor: colors.active,
				drawerActiveTintColor: colors.inActive,
				drawerContentContainerStyle: {
					paddingTop: 80,
					backgroundColor: colors.inActive,
					flex: 1,
					rowGap: 12,
				},
				drawerStyle: {
					backgroundColor: 'green',
				},
				drawerLabelStyle: {
					fontWeight: '700',
					fontSize: 16,
					textTransform: 'capitalize',
				},
				headerTintColor: colors.active,
				headerStyle: {
					backgroundColor: colors.inActive,
				},
			}}>
			<Drawer.Screen
				name='dashboard'
				component={DashboardScreen}
				options={{
					drawerLabel: 'home',
					drawerIcon: ({ focused }) => (
						<Ionicons
							name='home-outline'
							size={18}
							color={focused ? colors.inActive : colors.dark}
							style={{ marginRight: -20 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='about'
				component={AboutScreen}
				options={{
					drawerIcon: ({ focused }) => (
						<MaterialIcons
							name='info-outline'
							size={18}
							color={focused ? colors.inActive : colors.dark}
							style={{ marginRight: -20 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='courses'
				component={CourseScreen}
				options={{
					drawerIcon: ({ focused }) => (
						<MaterialIcons
							name='collections'
							size={18}
							color={focused ? colors.inActive : colors.dark}
							style={{ marginRight: -20 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='contact'
				component={ContactScreen}
				options={{
					drawerIcon: ({ focused }) => (
						<MaterialIcons
							name='contact-phone'
							size={18}
							color={focused ? colors.inActive : colors.dark}
							style={{ marginRight: -20 }}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
