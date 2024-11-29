import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import SleepMusicScreen from './SleepMusicScreen';

// Define the navigation stack parameters

export type RootStackParamList = {
  Welcome: undefined; // No parameters expected for the Welcome screen
  SleepMusic: undefined; // No parameters expected for the SleepMusic screen
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SleepMusic" component={SleepMusicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


{/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import SleepMusicScreen from './SleepMusicScreen';

// Define the RootStackParamList for type safety
export type RootStackParamList = {
  Welcome: undefined;
  SleepMusic: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SleepMusic"
          component={SleepMusicScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/}
