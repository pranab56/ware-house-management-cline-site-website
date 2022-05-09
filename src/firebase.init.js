import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5tERsMsjTNfDrWc4WDBBOcRYCMo3ipp4",
  authDomain: "ware-house-a4892.firebaseapp.com",
  projectId: "ware-house-a4892",
  storageBucket: "ware-house-a4892.appspot.com",
  messagingSenderId: "674410733079",
  appId: "1:674410733079:web:e58c845808207161dc8652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;