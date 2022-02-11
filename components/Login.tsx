import Link from 'next/link';
import { useState } from 'react';

import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';
import styles from '../styles/LoginComponents.module.sass';
import Head from 'next/head';
import SVG from "./Svg";

const Login = ({ setStateRef }: any) => {
	const [activeTab, setActiveTab] = useState('login');

	return (
		<div className={styles.container}>
			<Head>
				<title>
					{activeTab === 'login'
						? 'Login - QTA'
						: 'Reset Password - QTA'}
				</title>
			</Head>
			<button
				type="button"
				className="global maxWidth"
				onClick={() => setStateRef('landing')}
			>
				{'<< '}BACK
			</button>
			<h1>{activeTab === 'login' ? <><SVG.SignIn invert /> LOGIN</> : <><SVG.Mail invert /> RESET PASSWORD</>}</h1>
			{activeTab === 'login' ? <LoginForm /> : <ResetPasswordForm />}
			<footer className="form footer">
				<div>
					{activeTab === 'login' ? (
						<>
							<p>Forgot Password?</p>
							<Link href={''}>
								<a
									onClick={() =>
										setActiveTab('resetpassword')
									}
								>
									RESET PASSWORD
								</a>
							</Link>
						</>
					) : (
						<>
							<p>Already Remember?</p>
							<Link href={''}>
								<a onClick={() => setActiveTab('login')}>
									Back To Login
								</a>
							</Link>
						</>
					)}
				</div>
				<div>
					<p>Doesn{"'"}t Have An Account?</p>
					<Link href="">
						<a onClick={() => setStateRef('signup')}>SIGN UP</a>
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default Login;
