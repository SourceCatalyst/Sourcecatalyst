
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNN2ZOu9U8OuaItcynA5gkexZBJhjBF10",
  authDomain: "sourcecatalyst-f1860.firebaseapp.com",
  projectId: "sourcecatalyst-f1860",
  storageBucket: "sourcecatalyst-f1860.appspot.com",
  messagingSenderId: "858113358358",
  appId: "1:858113358358:web:4a7784d18fac9e05115337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);