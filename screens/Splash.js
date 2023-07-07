import React, {useEffect, useState} from 'react';
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
  import auth from '@react-native-firebase/auth';

  export default function Splash () {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login')
      }, 2000)
      
    }, [])

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
      
    checkIfLogedIn = () =>{
      
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        if(subscriber==user)
        {
          this.props.navigation.navigate('Home');
        }else{
          this.props.navigation.navigate('Login');
        }
      }
      
     
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