import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBi9bOWcvLxjNtUe8oHpq3m74VRL-bPaZ0',
	authDomain: 'slack-redux-59239.firebaseapp.com',
	projectId: 'slack-redux-59239',
	storageBucket: 'slack-redux-59239.appspot.com',
	messagingSenderId: '1086425991277',
	appId: '1:1086425991277:web:4783b74978152a7a425764',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
