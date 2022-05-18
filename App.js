import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './components/Accueil';
import Drawer from './components/Drawer';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}


