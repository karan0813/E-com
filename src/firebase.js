import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCo2ETPF0kCDj9JJEFdL395nvG03e8_wTo",
  authDomain: "e-com-d4874.firebaseapp.com",
  projectId: "e-com-d4874",
  storageBucket: "e-com-d4874.appspot.com",
  messagingSenderId: "956071652658",
  appId: "1:956071652658:web:99e91e24f0f07478fe3b2b",
  measurementId: "G-VSFL3SCL1C"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth}
  