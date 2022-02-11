import Router from 'next/router';
import { Dispatch, SetStateAction } from 'react';

export function redirect(href: string) {
	Router.push(href);
}

export function firerr(
	code: string,
	setState: Dispatch<SetStateAction<string>>
) {
	switch (code) {
		case 'auth/user-not-found':
			setState('User Not Found, Please Sign Up First!');
			break;
		case 'auth/missing-email':
			setState('Please insert an email address');
			break;
		case 'auth/weak-password':
			setState('Password Must Be At Least 6 Characters');
			break;
		case 'auth/email-already-in-use':
			setState('Email Is Already In Use, Please Try Different Email');
			break;
		case 'auth/invalid-email':
			setState('Please Insert A Valid Email Address');
			break;
		case 'auth/account-exists-with-different-credential':
			setState('Account is already exist with different credentials');
			break;
		case 'auth/credential-already-in-use':
			setState('Credentials Is Already In use');
			break;
		case 'auth/operation-not-supported-in-this-environment':
			setState(
				'The Operation is not allowed/supported in this environment'
			);
			break;
		case 'auth/timeout':
			setState('Request timeout, try again later');
			break;
		case 'auth/argument-error':
		case 'auth/invalid-persistence-type':
		case 'auth/unsupported-persistence-type':
			setState('an unknown error occured');
			break;
		case 'auth/invalid-credential':
			setState('Invalid credentials');
			break;
		case 'auth/wrong-password':
			setState('Wrong password');
			break;
		case 'auth/invalid-verification-code':
			setState('Invalid verification code');
			break;
		case 'auth/invalid-verification-id':
			setState('Invalid verification ID');
			break;
		case 'auth/custom-token-mismatch':
			setState('Custom token is mismatched');
			break;
		case 'auth/invalid-custom-token':
			setState('Invalid custom token');
			break;
		case 'auth/captcha-check-failed':
			setState('Captcha failed');
			break;
		case 'auth/invalid-phone-number':
			setState('Invalid phone number');
			break;
		case 'auth/missing-phone-number':
			setState('Please enter a phone number');
			break;
		case 'auth/quota-exceeded':
			setState('Authentication qota exceeded');
			break;
		case 'auth/cancelled-popup-request':
			setState('Cancelled popup authentication');
			break;
		case 'auth/popup-blocked':
			setState('Popup is blocked');
			break;
		case 'auth/popup-closed-by-user':
			setState('Popup window is closed by the user');
			break;
		case 'auth/invalid-user-token':
			setState('Invalid user token');
			break;
		case 'auth/user-token-expired':
			setState('User token is expired');
			break;
		case 'auth/null-user':
			setState('User is null');
			break;
		case 'auth/invalid-api-key':
			setState('Invalid api key');
			break;
		case 'auth/network-request-failed':
			setState("Can't connect to the server");
			break;
		case 'auth/requires-recent-login':
			setState('Auth require recent login');
			break;
		case 'auth/too-many-requests':
			setState('Account is temporarily disabled due to too many request');
			break;
		case 'auth/id-token-expired':
			setState('ID token is expired');
			break;
		case 'auth/invalid-creation-time':
			setState('Invalid creation time, try again later');
			break;
		case 'auth/invalid-display-name':
			setState('Invalid username');
			break;
		case 'auth/invalid-email-verified':
			setState('Email is not yet verified');
			break;
		case 'auth/invalid-id-token':
			setState('ID token invalid');
			break;
		case 'auth/invalid-password':
			setState('Invalid password');
			break;
		case 'auth/invalid-password-hash':
			setState('Invalid password hash');
			break;
		case 'auth/invalid-photo-url':
			setState("Invalid user's profile picture");
			break;
		case 'auth/invalid-provider-id':
			setState('Invalid provider id');
			break;
		case 'auth/invalid-session-cookie-duration':
			setState('Session cookie duration is invalid');
			break;
		case 'auth/invalid-uid':
			setState('Invalid user id');
			break;
		case 'auth/maximum-user-count-exceeded':
			setState('Maximum user count is exceeded');
			break;
		case 'auth/missing-uid':
			setState('Missing user AD');
			break;
		case 'auth/session-cookie-revoked':
			setState('Session cookie is revoked');
			break;
		case 'auth/uid-alread-exists':
			setState('User id is already exist');
			break;
		case 'auth/email-already-exists':
			setState(
				'Email is already exist, please try another email address'
			);
			break;
		case 'auth/phone-number-already-exists':
			setState(
				'Phone number is already exist, please use another phone number'
			);
			break;
		case 'auth/project-not-found':
			setState('Firebase project not found');
			break;
		case 'auth/insufficient-permission':
			setState(
				'Insufficient permisson, you are not allowed to do this operation'
			);
			break;
		case 'auth/internal-error':
			setState('An error occured on the client');
			break;
		default:
			setState('Unknown Error');
			break;
	}
}
