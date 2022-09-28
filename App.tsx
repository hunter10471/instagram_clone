import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import LandingScreen from './components/auth/LandingScreen';
import RegisterScreen from './components/auth/RegisterScreen';
import { getAuth } from './config/firebase/index';

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoaded(true);
      if (!user) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    });
  }, []);
  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen'>
        <Stack.Screen
          component={LandingScreen}
          name='LandingScreen'
          options={{ headerShown: false }}
        />

        <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
