import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, User } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

// fitexx
const fitexxConfig = {
	apiKey: 'AIzaSyB-nVz0VvXstw00aMe68jbx0xRGA58eKyU',
	authDomain: 'qwyzex-fitexx.firebaseapp.com',
	projectId: 'qwyzex-fitexx',
	storageBucket: 'qwyzex-fitexx.appspot.com',
	messagingSenderId: '101054144241',
	appId: '1:101054144241:web:80914b4d044a4521af1350',
	measurementId: 'G-1SMK5HRV7M',
};

// todo-firebase
const originalConfig = {
	apiKey: 'AIzaSyBtXcsrZjqR-Us5Gt1unfUO1ZOyEwBYQkk',
	authDomain: 'todo-qwyzex.firebaseapp.com',
	projectId: 'todo-qwyzex',
	storageBucket: 'todo-qwyzex.appspot.com',
	messagingSenderId: '444113056981',
	appId: '1:444113056981:web:31a9eb4b221af483d39e5c',
	measurementId: 'G-XZ3PLJ6J8Y',
};

// new
const firebaseConfig = {
	apiKey: 'AIzaSyB40DuRqN6DS4DYnrq5zjtFNo-7YcvCUxc',
	authDomain: 'fitexx-59df5.firebaseapp.com',
	projectId: 'fitexx-59df5',
	storageBucket: 'fitexx-59df5.appspot.com',
	messagingSenderId: '441352535402',
	appId: '1:441352535402:web:2a26ffcb775d250424f913',
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export const user: User | null = auth.currentUser;
