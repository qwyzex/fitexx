import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

// fitexx
const fitexxConfig = {
	apiKey: 'AIzaSyAJyle4WmzmoQh6G1ovogJEkMP9QlSdTCE',
	authDomain: 'fitexx-qwyzex.firebaseapp.com',
	projectId: 'fitexx-qwyzex',
	storageBucket: 'fitexx-qwyzex.appspot.com',
	messagingSenderId: '197356418403',
	appId: '1:197356418403:web:f5915c242874e710fdcf56',
	measurementId: 'G-VYK3FTNVRX',
};

// todo-firebase
const originalConfig = {
  apiKey: "AIzaSyBtXcsrZjqR-Us5Gt1unfUO1ZOyEwBYQkk",
  authDomain: "todo-qwyzex.firebaseapp.com",
  projectId: "todo-qwyzex",
  storageBucket: "todo-qwyzex.appspot.com",
  messagingSenderId: "444113056981",
  appId: "1:444113056981:web:31a9eb4b221af483d39e5c",
  measurementId: "G-XZ3PLJ6J8Y"
};

export const app: FirebaseApp = initializeApp(originalConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export const user = auth.currentUser;
