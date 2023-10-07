// firebase v9
import firebase from "firebase/compat/app";
// 照片
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuVd0udh-aiMbnbzacrZnVmWaxxGHYrGo",
    authDomain: "ninenine-c9744.firebaseapp.com",
    projectId: "ninenine-c9744",
    storageBucket: "ninenine-c9744.appspot.com",
    messagingSenderId: "329238296602",
    appId: "1:329238296602:web:4b4d4858ccc4c065a2b9a3",
    measurementId: "G-ZFGMW6KWK2",
};

// 初始化
firebase.initializeApp(firebaseConfig);
export default firebase;
