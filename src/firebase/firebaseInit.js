
import firebase from "firebase/App"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCoACObrva0ZjW2_l1ke4DRx4c_jZ7P0XY",
    authDomain: "blog-1011d.firebaseapp.com",
    projectId: "blog-1011d",
    storageBucket: "blog-1011d.appspot.com",
    messagingSenderId: "952713796720",
    appId: "1:952713796720:web:c577b23b0af24f6d35a8b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimeetamp;

export {timestamp};
export default firebaseApp.firestore()