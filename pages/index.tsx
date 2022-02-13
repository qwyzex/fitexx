import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
// import firerr from 'firerr';

import styles from '../styles/Home.module.sass';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Login from '../components/Login';
import SignUpForm from '../components/SignUp';
import Landing from '../components/Landing';

const Home: NextPage = () => {
	const [user] = useAuthState(auth);

	const [activePage, setActivePage] = useState('loading');

	useEffect(() => {
		if (user) {
			if (activePage !== 'dashboard') {
				setActivePage('dashboard');
			}
		} else {
			setTimeout(() => {
				setActivePage('landing');
			}, 350);
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
		</div>
	);
};

export default Home;
