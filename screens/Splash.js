import React, {useEffect} from 'react';
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

  export default function Splash () {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000)
    }, [])
    return (
        <SafeAreaView style={styles.sectionContainer}>
        <Text>Source {'\n'}Catalyst</Text>
    
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