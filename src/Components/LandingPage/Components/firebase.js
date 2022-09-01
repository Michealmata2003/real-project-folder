import { initializeApp } from "firebase/app";
import {getAuth, } from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyAgrzPyKToJ1d9SIoKyKl3e5Gny0sp_JnI",
  authDomain: "my-project-auth-9ba77.firebaseapp.com",
  projectId: "my-project-auth-9ba77",
  storageBucket: "my-project-auth-9ba77.appspot.com",
  messagingSenderId: "654341215641",
  appId: "1:654341215641:web:0a37b46117e7b24da7ef08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 

// const Provider = new GoogleAuthProvider(){

 
// }