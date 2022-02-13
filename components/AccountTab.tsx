/* eslint-disable @next/next/no-img-element */
import { signOut } from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	DocumentSnapshot,
	DocumentData,
	CollectionReference,
	DocumentReference,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import styles from '../styles/AccountTab.module.sass';
import { useEffect, useState } from 'react';
import { firerr } from '../functions';
import SVG from './Svg';
import LoadingCircular from './LoadingCircular';
// import firerr from 'firerr';

const AccountTab = (props: any) => {
	const [user] = useAuthState(auth);
	const [userData, setUserData]: any = useState(null);

	const [formValueUsername, setFormValueUsername] = useState('');
	const [formValueBio, setFormValueBio] = useState('');

	const [isInEditMode, setIsInEditMode] = useState(false);
	const [formLoading, setFormLoading] = useState(false);
	const [formError, setFormError] = useState('');

	async function getUserCredentials() {
		const userRef: CollectionReference<DocumentData> = collection(
			db,
			'users'
		);
		const userCol: DocumentReference<DocumentData> = doc(
			userRef,
			user!.uid
		);
		const docSnap: DocumentSnapshot<DocumentData> = await getDoc(userCol);

		async function getUserDoc() {
			await setDoc(doc(db, 'users', user!.uid), {
				uid: user!.uid,
				email: user!.email,
				username: `user-${Math.random() * 20000000000000000 - 1000000}`,
				bio: '',
				profilePicture: `https://avatars.dicebear.com/api/identicon/${Math.random().toString()}.svg`,
			})
				.then(() => {
					setUserData(docSnap.data());
				})
				.catch((error: any) => {
					const code: string = error.code;
					firerr(code, setFormError);

					console.warn(error.code);
					console.warn(error.message);
				});
		}

		if (docSnap.exists()) {
			setUserData(docSnap.data());
		} else {
			getUserDoc();
		}
	}

	async function updateUserCred(e: any) {
		e.preventDefault();
		setFormLoading(true);

		const docRef: DocumentReference<DocumentData> = doc(
			db,
			'users',
			userData.uid
		);
		await updateDoc(docRef, {
			username:
				formValueUsername !== userData.username
					? formValueUsername
					: userData.username,
			bio: formValueBio !== userData.bio ? formValueBio : userData.bio,
		})
			.then(() => {
				getUserCredentials();
				setFormLoading(true);
				setFormError('');
				setIsInEditMode(false);
			})
			.catch((err) => {
				const code: string = err.code;
				firerr(code, setFormError);
			});
	}

	useEffect(() => {
		getUserCredentials();
	}, []);

	useEffect(() => {
		if (props.stateRef !== true) {
			setIsInEditMode(false);
		}
	}, [props.stateRef]);

	useEffect(() => {
		setFormLoading(true);
		function setFormValue() {
			setFormValueUsername(userData.username);
			setFormValueBio(userData.bio);
		}
		if (userData) {
			setFormValue();
			setFormLoading(false);
		}
		// eslint-disable-next-line
	}, [isInEditMode]);

	return (
		<div className={`${styles.container} ${props.cls}`} ref={props.ref}>
			<header>
				<button onClick={() => props.setStateRef(!props.stateRef)}>
					<object data="/svg/x.svg" type="image/svg+xml"></object>
				</button>
				<h2>
					{isInEditMode ? 'Update Info  ' : 'Account Tab  '}
					<SVG.User invert />
				</h2>
			</header>{' '}
			<main>
				<header>
					<button onClick={() => setIsInEditMode(!isInEditMode)}>
						{isInEditMode ? <SVG.Backspace /> : <SVG.Pencil />}
						<span>{isInEditMode ? 'CANCEL' : 'EDIT'}</span>
					</button>
				</header>

				{isInEditMode ? (
					<>
						<form onSubmit={updateUserCred}>
							<section>
								<img
									src={
										userData
											? userData!.profilePicture
											: '/favicon.ico'
									}
									alt=""
									width={80}
									height={80}
								/>
							</section>
							<div>
								<label>
									USERNAME <span>*</span>
								</label>
								<input
									type="text"
									required
									value={formValueUsername}
									onChange={(e) =>
										setFormValueUsername(e.target.value)
									}
									placeholder="Your Username"
								/>
							</div>
							<div>
								<label>BIO</label>
								<input
									type="text"
									value={formValueBio}
									onChange={(e) =>
										setFormValueBio(e.target.value)
									}
									placeholder="Describe Yourself"
								/>
							</div>
							<div>
								<label>EMAIL</label>
								<input
									readOnly
									type="text"
									value={userData && userData.email}
								/>
							</div>
							<div className="submitDiv">
								<button
									className="global"
									type="submit"
									disabled={
										formLoading
											? true
											: formValueUsername ===
													userData.username &&
											  formValueBio === userData.bio
											? true
											: false
									}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: '1rem',
									}}
								>
									{formLoading ? (
										<>
											<span>SAVING...</span>
											<LoadingCircular
												size={20}
												color={'#fff'}
												thickness={200}
											/>
										</>
									) : (
										<span>SAVE</span>
									)}
								</button>
							</div>
							<div className="formError">
								{formError != '' && <p>{formError}</p>}
							</div>
						</form>
					</>
				) : (
					<>
						<section>
							<img
								src={
									userData
										? userData!.profilePicture
										: '/favicon.ico'
								}
								alt=""
								width={80}
								height={80}
							/>
						</section>
						<div>
							<label>USERNAME</label>
							<h3>{userData && userData.username}</h3>
						</div>
						<hr />
						<div>
							<label>BIO</label>
							<h3>
								{userData ? (
									userData.bio === '' ? (
										<span className="cascade">
											Your Bio
										</span>
									) : (
										userData.bio
									)
								) : (
									'Loading...'
								)}
							</h3>
						</div>
						<hr />
						<div>
							<label>EMAIL</label>
							<h3>{userData && userData.email}</h3>
						</div>
					</>
				)}
			</main>{' '}
			<footer>
				<button
					onClick={() => {
						if (confirm('Are You Sure You Want To Sign Out?')) {
							signOut(auth);
						}
					}}
				>
					<SVG.SignOut />
					<span>Sign Out</span>
				</button>
			</footer>
		</div>
	);
};

export default AccountTab;
