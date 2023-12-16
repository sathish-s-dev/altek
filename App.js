import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './Navigators/DrawerNavigator';
import { PaperProvider } from 'react-native-paper';
import ToastManager, { Toast } from 'expo-react-native-toastify';

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<DrawerNavigator />
				<ToastManager />
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
