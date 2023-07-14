import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import countryList from 'react-select-country-list'

  export default function Profile () {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(text) {
        setUsername(text);
      }
    
      function handlePasswordChange(text) {
        setPassword(text);
      }
    return (
      <SafeAreaView style={styles.sectionContainer}>
        
        <TextInput  style={styles.inputimg}></TextInput>
         <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="name?"
            onChangeText={handleUsernameChange}
          />
          
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="contact number"
            onChangeText={handlePasswordChange}
          />

            <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="country"
            onChangeText={handlePasswordChange}
          />

<TouchableOpacity onPress={() => {
              navigation.navigate('TabNavigation');
            }} style={styles.button}>
        <Text  >CONTINUE</Text>
        
        </TouchableOpacity>
        </View>
        
    
     </SafeAreaView>
   );
    }

    const styles = StyleSheet.create({
        sectionContainer: {
            flex: 1,
            backgroundColor: '#ffffff',
            alignItems:'center',
            paddingTop: 30
        },
        form: {
            paddingHorizontal: 20,
          },
          input: {
            backgroundColor: '#F2F2F2',
            borderRadius: 20,
            width: 360,
            marginBottom: 17,
            fontSize: 17,
            paddingHorizontal: 20,
            height: 50,
          },
        inputimg:{
            backgroundColor: '#F2F2F2',
            borderRadius: 90,
            width: 160,
            marginBottom: 25,
            fontSize: 17,
            paddingHorizontal: 30,
            height: 150,
        },
          label: {
            color: '#0F2F5B',
            fontWeight: '600',
            fontSize: 20,
          },
          button: {
           
            borderRadius: 10,
            backgroundColor: '#F2F2F2',
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 90,
            paddingVertical:10
          }
        });