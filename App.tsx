import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import LandingScreen from './components/auth/LandingScreen';
import RegisterScreen from './components/auth/RegisterScreen';
import { getAuth } from './config/firebase/index';
import { Provider } from 'react-redux';
import MainScreen from './components/MainScreen';
import { store } from './redux/store';
import LoginScreen from './components/auth/LoginScreen';

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
  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator initialRouteName='LandingScreen'>
            <Stack.Screen
              component={LandingScreen}
              name='LandingScreen'
              options={{ headerShown: false }}
            />

            <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
            <Stack.Screen component={LoginScreen} name='LoginScreen' />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
