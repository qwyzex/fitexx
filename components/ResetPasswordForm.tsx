import { sendPasswordResetEmail } from 'firebase/auth';
import { firerr } from '../functions';
import { useState } from 'react';
import { auth } from '../firebase';
import styles from '../styles/ResetPasswordForm.module.sass';

export default function ResetPasswordForm() {
	const [formValueEmail, setFormValueEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [sended, setSended] = useState(false);
	const [formError, setFormError] = useState('');

	if (sended) {
		setTimeout(() => {
			setSended(false);
		}, 3000);
	}

	async function sendEmail(e: any) {
		e.preventDefault();
		setLoading(true);
		await sendPasswordResetEmail(auth, formValueEmail)
			.then(() => {
				setFormValueEmail('');
				setLoading(false);
				setSended(true);
				setFormError('');
			})
			.catch((error) => {
				setLoading(false);
				const code = error.code;
				firerr(code, setFormError);
			});
	}

	return (
		<form onSubmit={sendEmail} className={`${styles.form} form`}>
			<input
				autoFocus
				type="text"
				name="Email"
				id="formEmail"
				className="form input"
				value={formValueEmail}
				onChange={(e) => setFormValueEmail(e.target.value)}
				placeholder="Your Email Address"
			/>
			<button
				type="submit"
				className="global"
				disabled={loading ? true : false}
			>
				{loading ? 'SENDING...' : 'SEND EMAIL'}
			</button>
			{sended && (
				<span>Please Check Your Email To Reset The Password</span>
			)}
			<div className="formError">
				{formError != '' && <p>{formError}</p>}
			</div>
		</form>
	);
}
