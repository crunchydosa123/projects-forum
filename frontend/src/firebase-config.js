import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2wWZXlFgf-rzw-LkRj-PLUYh9btYsv-c",
  authDomain: "csi-web-project.firebaseapp.com",
  projectId: "csi-web-project",
  storageBucket: "csi-web-project.appspot.com",
  messagingSenderId: "178405940750",
  appId: "1:178405940750:web:216b6802f0cca9227d265f",
  measurementId: "G-MTQZC8JPBG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const provider  = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result.user.displayName);
    console.log(result.user.email);
    console.log(result.user.photoURL);
  }).catch((error) => {
    console.log(error);
  })
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};


export default app;

