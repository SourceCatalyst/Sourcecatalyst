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
  import { useNavigation } from '@react-navigation/native';
  import Profile from './Profile';
  const Tab = createBottomTabNavigator();
  export default function Login () {
    const navigation = useNavigation();
    
    return (
      <SafeAreaView  style={styles.sectionContainer}>
        <Tab.Navigator>
     
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
     </SafeAreaView>
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