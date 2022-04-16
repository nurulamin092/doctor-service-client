// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIQdkTAMV2Urkp8eyGmP1j_Sc7uSuwRM8",
    authDomain: "doctor-service-provider.firebaseapp.com",
    projectId: "doctor-service-provider",
    storageBucket: "doctor-service-provider.appspot.com",
    messagingSenderId: "492013010030",
    appId: "1:492013010030:web:be49ecdd84c1652620fa7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;