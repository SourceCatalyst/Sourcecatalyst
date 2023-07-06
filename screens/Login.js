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

  export default function Login () {
    const navigation = useNavigation();
    
    return (
      <SafeAreaView  style={styles.sectionContainer}>
        <TouchableOpacity >
          <Text>Welcome To {'\n'} Source Catalyst</Text>
        <Text onPress={() => {
              navigation.navigate('Complete Profile');
            }}>login</Text>
        
        </TouchableOpacity>
    
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