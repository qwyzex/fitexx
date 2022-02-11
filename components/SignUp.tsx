import Link from 'next/link';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { firerr } from '../functions';
import styles from '../styles/SignUp.module.sass';
import { useAuthState } from 'react-firebase-hooks/auth';
// import firerr from "firerr";
import SVG from "./Svg";

const SignUpForm = ({ setStateRef }: any) => {
	const [user] = useAuthState(auth);
	const [activeTab, setActiveTab] = useState('createNewUser');

	const [formValueEmail, setFormValueEmail] = useState('');
	const [formValuePassword, setFormValuePassword] = useState('');

	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);

	async function createNewUser() {
		await createUserWithEmailAndPassword(
			auth,
			formValueEmail,
			formValuePassword
		)
			.then(() => {
				setLoading(false);
				setActiveTab('createUserCredentials');
				setFormError('');
			})
			.catch((error) => {
				setLoading(false);
				const code = error.code;
				firerr(code, setFormError);
			});
	}

	return (
		<>
			<form
				className={`${styles.form} form`}
				onSubmit={(e) => {
					e.preventDefault();
					setLoading(true);
					createNewUser();
				}}
			>
				<button
					type="button"
					className="global maxWidth"
					onClick={() => setStateRef('landing')}
				>
					{'<< '}BACK
				</button>
				<h1><SVG.Register invert /> SIGN UP</h1>
				<div className="wrapper">
					<label htmlFor="formEmail">Email</label>
					<input
						id="formEmail"
						type="email"
						className="form input"
						value={formValueEmail}
						onChange={(e) => setFormValueEmail(e.target.value)}
						placeholder='address@company.com'
					/>
				</div>
				<div className="wrapper">
					<label htmlFor="formPassword">Password</label>
					<input
						id="formPassword"
						type="password"
						className="form input"
						value={formValuePassword}
						onChange={(e) => setFormValuePassword(e.target.value)}
						placeholder='Your Password'
					/>
				</div>
				<div className="wrapper">
					<input
						id="submit"
						type="submit"
						className="global"
						disabled={loading ? true : false}
						value={loading ? 'PLEASE WAIT...' : 'CONTINUE'}
					/>
				</div>
				<footer className="form footer">
					<div>
						<p>Already Have An Account?</p>
						<Link href={''}>
							<a onClick={() => setStateRef('login')}>SIGN IN</a>
						</Link>
					</div>
				</footer>
			</form>
			<div className="formError">
				{formError !== '' && <p>{formError}</p>}
			</div>
		</>
	);
};

export default SignUpForm;
