import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './Navigators/DrawerNavigator';
import { PaperProvider } from 'react-native-paper';
import ToastManager from 'expo-react-native-toastify';

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer
				onStateChange={() => {
					console.log('change');
				}}>
				<DrawerNavigator />
				<ToastManager />
			</NavigationContainer>
		</PaperProvider>
	);
}
