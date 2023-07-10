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
import { signInWithGoogle } from '../firebaseConfig';
export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.sectionContainer}>

      <Text>Welcome To {'\n'} Source Catalyst</Text>

      <Button
      title="Google Sign-In"
      onPress ={() => signInWithGoogle}
    />


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