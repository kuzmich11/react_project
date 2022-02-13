import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfi6pQP171JUaYk2cbXAAab4Cl3_bGIss",
    authDomain: "my-chat-f8cbe.firebaseapp.com",
    databaseURL: "https://my-chat-f8cbe-default-rtdb.firebaseio.com",
    projectId: "my-chat-f8cbe",
    storageBucket: "my-chat-f8cbe.appspot.com",
    messagingSenderId: "100256109006",
    appId: "1:100256109006:web:6d28c82ab6f088f4bcdb9f",
    measurementId: "G-N80GCVVPBH"
};

const firebase = initializeApp(firebaseConfig);

export default firebase
