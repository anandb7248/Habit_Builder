// import firebase from "@react-native-firebase/app";

//React-native-firebase has more capabilities than regular firebase
//Its used for Android and iOS apps
//The project was created for a web application on the firebase console
//react-native-firebase didn't work for the web app
//If we want to use react-native-firebase, we might have to create a iOS or Andriod app in the firebase console, under the same project

//Native module can't be null error, if web firebase isn't used
//However, the error comes back when redux is reintroduced
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkqPOjrBkY9Fynas1XA-jGS1E_SUy6XTk",
  authDomain: "habitbuilder-d84f5.firebaseapp.com",
  databaseURL: "https://habitbuilder-d84f5.firebaseio.com",
  projectId: "habitbuilder-d84f5",
  storageBucket: "habitbuilder-d84f5.appspot.com",
  messagingSenderId: "570242483391",
  appId: "1:570242483391:web:d52c55ff7ffcf7d857b20a",
  measurementId: "G-9F1Y75L70S",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
