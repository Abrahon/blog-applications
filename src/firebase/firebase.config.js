// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSM9MrmPjJa88yONLQ-YNU_5XJ03I891w",
  authDomain: "mern-stack-application-c51ae.firebaseapp.com",
  projectId: "mern-stack-application-c51ae",
  storageBucket: "mern-stack-application-c51ae.appspot.com",
  messagingSenderId: "258014624441",
  appId: "1:258014624441:web:1f52609184411495ebb968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;