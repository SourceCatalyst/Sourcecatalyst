import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
  } from 'react-native';
  import { useNavigation, NavigationContainer } from '@react-navigation/native';
  import Courses from './Courses';
  import Network from './Network';
  import Events from './Events';
  import Work from './Work';
  import Home from './Home'
  
  const Tab = createBottomTabNavigator();

  export default function TabNavigation () {
    const navigation = useNavigation();
    
    return (
      
        <Tab.Navigator labelStyle={{fontSize: 12}}
      inactiveColor="black"
      activeColor="black">
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Tab.Screen name="Work" component={Work} />
        <Tab.Screen name="Courses" component={Courses} />
        <Tab.Screen name="Network" component={Network} />
      <Tab.Screen name="Events" component={Events} />
      
    </Tab.Navigator>
    
     
   );
    }


    const styles = StyleSheet.create({
        sectionContainer: {
          flex: 1,
          backgroundColor: '#ffffff',
          alignItems:'center',
          justifyContent: 'center',
        }
    });