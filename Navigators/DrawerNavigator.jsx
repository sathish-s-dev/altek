import {
	DrawerContentScrollView,
	DrawerItemList,
	createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import { Image } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';
// import CourseScreen from '../screens/CourseScreen';
import { useNavigation } from '@react-navigation/native';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import CourseScreen from '../screens/CourseScreen1';
import PlacementScreen from '../screens/PlacementScreen';
import {
	drawerScreenOptions,
	navigatorOptions,
} from '../utils/drawerScreenOptions';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const navigation = useNavigation();
	console.log(navigation);

	return (
		<Drawer.Navigator
			drawerContent={(props) => {
				return (
					<DrawerContentScrollView
						{...props}
						className='bg-slate-200 self-center'>
						<Image
							source={require('../assets/Altek_Logo2.png')}
							resizeMode='contain'
							className='w-24 mx-4'
						/>
						<DrawerItemList {...props} />
					</DrawerContentScrollView>
				);
			}}
			screenOptions={navigatorOptions(navigation)}>
			<Drawer.Screen
				name='dashboard'
				component={DashboardScreen}
				options={drawerScreenOptions('home', 'Home')}
			/>
			<Drawer.Screen
				name='about'
				component={AboutScreen}
				options={drawerScreenOptions('info-outline', 'About')}
			/>
			<Drawer.Screen
				name='courses'
				component={CourseScreen}
				options={drawerScreenOptions('library-books', 'Courses')}
			/>

			<Drawer.Screen
				name='placement'
				component={PlacementScreen}
				options={drawerScreenOptions('business', 'Placement')}
			/>
			<Drawer.Screen
				name='contact'
				component={ContactScreen}
				options={drawerScreenOptions('call', 'Contact')}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
