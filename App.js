import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Program from './screens/Program';
import Videos from './screens/Videos';
import Documents from './screens/Documents';
import TabNavigation from './screens/TabNavigation';
import Submissions from './screens/Submission';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false, }} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Complete Profile"
          component={Profile}
          options={{ headerShadowVisible: false, }}
        />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false, }}
        />

        <Stack.Screen
          name="Program"
          component={Program}
          options={{ headerShown: false, }}
        />

<Stack.Screen
          name="Submissions"
          component={Submissions}
          options={{ headerShown: false, }}
        />

        <Stack.Screen
          name="Videos"
          component={Videos}
          options={{ headerShown: false, }}
        />

        <Stack.Screen
          name="Documents"
          component={Documents}
          options={{ headerShown: false, }}
        />

      </Stack.Navigator>
    </NavigationContainer>
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
