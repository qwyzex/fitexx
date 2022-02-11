import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect, useLayoutEffect } from 'react';

import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

import { auth, db } from '../firebase';
import styles from '../styles/Home.module.sass';
import {
	collection,
	CollectionReference,
	doc,
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	getDoc,
	setDoc,
} from 'firebase/firestore';
import Loading from '../components/Loading';
import Login from '../components/Login';
import SignUpForm from '../components/SignUp';
import { firerr } from '../functions';
// import firerr from 'firerr';
import Landing from '../components/Landing';

const Home: NextPage = () => {
	const [user] = useAuthState(auth);

	const [activePage, setActivePage] = useState('loading');
	const [loading, setLoading] = useState(true);
	const [appError, setAppError] = useState('');

	useEffect(() => {
		async function getUserDoc() {
			const usersRef: CollectionReference<DocumentData> = collection(
				db,
				'users'
			);
			const docRef: DocumentReference<DocumentData> = doc(
				usersRef,
				user!.uid
			);
			const docSnap: DocumentSnapshot<DocumentData> = await getDoc(
				docRef
			);

			if (docSnap.exists()) {
				setLoading(false);
			} else {
				await setDoc(doc(db, 'users', user!.uid), {
					uid: user!.uid,
					email: user!.email,
					username: `user-${Math.random() * 20000000000000000 + 1}`,
					bio: '',
					profilePicture: `https://avatars.dicebear.com/api/identicon/${Math.random().toString()}.svg`,
				})
					.then(() => {
						setLoading(false);
						setActivePage('dashboard');
					})
					.catch((error: any) => {
						setLoading(false);
						const code: string = error.code;
						firerr(code, setAppError);

						console.warn(error.code);
						console.warn(error.message);
					});
			}
		}
		if (user) {
			getUserDoc();
			if (activePage !== 'dashboard') {
				setActivePage('dashboard');
			}
		} else {
			setActivePage('landing');
		}
		// eslint-disable-next-line
	}, [user]);

	return (
		<div
			className={`${styles.container} ${
				user && activePage === 'dashboard' ? styles.user : ''
			}`}
		>
			<Head>
				<title>FiteXX</title>
			</Head>
			{activePage === 'landing' ? (
				<Landing setActivePage={setActivePage} />
			) : user && activePage === 'dashboard' ? (
				<>
					<Dashboard />
					<Footer />
				</>
			) : activePage === 'login' ? (
				<Login setStateRef={setActivePage} />
			) : activePage === 'signup' ? (
				<SignUpForm setStateRef={setActivePage} />
			) : activePage === 'loading' ? (
				<Loading />
			) : (
				''
			)}
			<div className="formError">
				{appError != '' && <p>{appError}</p>}
			</div>
		</div>
	);
};

export default Home;
