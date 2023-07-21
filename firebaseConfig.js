import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdWin1i9Z40vlNR5Ox1aWktQ4TMbfVCWo",
  authDomain: "sourcecatalyst-c3bc6.firebaseapp.com",
  projectId: "sourcecatalyst-c3bc6",
  storageBucket: "sourcecatalyst-c3bc6.appspot.com",
  messagingSenderId: "486349858970",
  appId: "1:486349858970:web:4e84b4f835faf2f4675723",
  databaseURL: "https://sourcecatalyst-c3bc6-default-rtdb.firebaseio.com/",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}