

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3vkWRpgRgsVve3e3IzXE7WFiz6gIXpYE",
  authDomain: "e-commerce-project-with-react.firebaseapp.com",
  projectId: "e-commerce-project-with-react",
  storageBucket: "e-commerce-project-with-react.appspot.com",
  messagingSenderId: "127044965512",
  appId: "1:127044965512:web:b60317acdcb2a49958fb3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;