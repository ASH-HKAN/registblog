import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAohnExgu3PrNR_ZDOL1GbRblHZEb3ZX9M",
    authDomain: "fireblog-5128b.firebaseapp.com",
    projectId: "fireblog-5128b",
    storageBucket: "fireblog-5128b.appspot.com",
    messagingSenderId: "458627585250",
    appId: "1:458627585250:web:033e41ea218275c0017abb"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()