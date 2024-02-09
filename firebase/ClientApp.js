import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Ii1Y8SRTC42o1UPERgf7gp2HXekQHt4",
  authDomain: "clone-38f08.firebaseapp.com",
  projectId: "clone-38f08",
  storageBucket: "clone-38f08.appspot.com",
  messagingSenderId: "156360839705",
  appId: "1:156360839705:web:da6450d61f9f0831669088",
  measurementId: "G-G8BCM4TSZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;

