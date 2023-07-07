import React, { useEffect } from 'react';
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
import {firebaseConfig} from '../firebaseConfig'
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";


const app = initializeApp(firebaseConfig);
export default function Login() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.sectionContainer}>

      <Text>Welcome To {'\n'} Source Catalyst</Text>

      <TouchableOpacity >
        <Text>Sign In With Google</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});