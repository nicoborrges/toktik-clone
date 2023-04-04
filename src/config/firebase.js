import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApP2FxmoQDL5HNNtuH0jmfOGanzWdQSwA",
  authDomain: "xurrastok.firebaseapp.com",
  projectId: "xurrastok",
  storageBucket: "xurrastok.appspot.com",
  messagingSenderId: "480142800689",
  appId: "1:480142800689:web:0ca3b792cbd799db42a210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;