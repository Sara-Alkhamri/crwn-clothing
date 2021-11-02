import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCiVpFlIqOFYZTT2ex5NmGnK-V3LYBPV94",
    authDomain: "crown-db-1fe29.firebaseapp.com",
    projectId: "crown-db-1fe29",
    storageBucket: "crown-db-1fe29.appspot.com",
    messagingSenderId: "440286059866",
    appId: "1:440286059866:web:8f1228f9ea2705e3ac2763",
    measurementId: "G-S524KHL88F"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;