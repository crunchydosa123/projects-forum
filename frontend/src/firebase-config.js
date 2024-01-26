// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2wWZXlFgf-rzw-LkRj-PLUYh9btYsv-c",
  authDomain: "csi-web-project.firebaseapp.com",
  projectId: "csi-web-project",
  storageBucket: "csi-web-project.appspot.com",
  messagingSenderId: "178405940750",
  appId: "1:178405940750:web:216b6802f0cca9227d265f",
  measurementId: "G-MTQZC8JPBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;