import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// // import { signInWithGoogle } from '../firebaseConfig';
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // Optionally import the services that you want to use
// // import {...} from "firebase/auth";
// // import {...} from "firebase/database";
// // import {...} from "firebase/firestore";
// // import {...} from "firebase/functions";
// // import {...} from "firebase/storage";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// export { app, auth };
// auth.languageCode = 'it';
// import { GoogleSignin } from 'react-native-google-signin';
// onLoginOrRegister = () => {
//   GoogleSignin.signIn()
//     .then((data) => {
//       // Create a new Firebase credential with the token
//       const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
//       // Login with the credential
//       return firebase.auth().signInWithCredential(credential);
//     })
//     .then((user) => {
//       // If you need to do anything with the user, do it here
//       // The user will be logged in automatically by the
//       // `onAuthStateChanged` listener we set up in App.js earlier
//     })
//     .catch((error) => {
//       const { code, message } = error;
//       // For details of error codes, see the docs
//       // The message contains the default Firebase string
//       // representation of the error
//     });
// }
// // const provider = new GoogleAuthProvider();
// // signInWithPopup(auth, provider)
// //   .then((result) => {
// //     const credential = GoogleAuthProvider.credentialFromResult(result);
// //     const token = credential.accessToken;
// //     const user = result.user;
// //   }).catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     const email = error.customData.email;
// //     const credential = GoogleAuthProvider.credentialFromError(error);
// //     // ...
// //   });



export default function Login() {
  const navigation = useNavigation();
  function onSubmit(){
    navigation.navigate('Complete Profile');
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.sectionContainer}>
        <View style={styles.box}>

        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Image
            style={styles.icon}
            source={require('../assets/google.png')}
          />
          <Text style={styles.butxt}>CONTINUE WITH GOOGLE</Text>
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#F2F1F7'
  },
  box: {
    flex: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: 40,
    marginBottom: 10
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  butxt:{
    fontWeight: "900",
    color:"#525252",
    fontSize: 17,
  },
  icon:{
    height: 20,
    width: 19,
    marginRight: 7
  }
});