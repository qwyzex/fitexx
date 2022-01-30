import Router from "next/router";

export function redirect(href: string | any) {
    Router.push(href);
}

export function firebaseError(code: string, setState: any) {
    switch (code) {
        case "auth/missing-email":
            setState("please insert an email address");
            break;
        case "auth/weak-password":
            setState("Password Must Be At Least 6 Characters");
            break;
        case "auth/email-already-in-use":
            setState("Email Is Already In Use, Please Try Different Email");
            break;
        case "auth/invalid-email":
            setState("Please Insert A Valid Email Address");
            break;
        case "auth/account-exists-with-different-credential":
            setState("Account is already exist with different credentials");
            break;
        case "auth/credential-already-in-use":
            setState("Credentials Is Already In use");
            break;
        case "auth/operation-not-supported-in-this-environment":
            setState("The Operation is not allowed/supported in this environment");
            break;
        case "auth/timeout":
            setState("Request timeout, try again later");
            break;
        case "auth/argument-error":
            setState("an unknown error occured");
            break;
        case "auth/invalid-persistence-type":
            setState("an unknown error occured");
            break;
        case "auth/unsupported-persistence-type":
            setState("an unknown error occured");
            break;
        case "auth/invalid-credential":
            setState("Invalid credentials");
            break;
        case "auth/wrong-password":
            setState("Wrong password");
            break;
        case "auth/invalid-verification-code":
            setState("Invalid verification code");
            break;
        case "auth/invalid-verification-id":
            setState("invalid verification id");
            break;
        case "auth/custom-token-mismatch":
            setState("custom token is mismatched");
            break;
        case "auth/invalid-custom-token":
            setState("invalid custom token");
            break;
        case "auth/captcha-check-failed":
            setState("captcha failed");
            break;
        case "auth/invalid-phone-number":
            setState("invalid phone number");
            break;
        case "auth/missing-phone-number":
            setState("please enter a phone number");
            break;
        case "auth/quota-exceeded":
            setState("authentication qota exceeded");
            break;
        case "auth/cancelled-popup-request":
            setState("cancelled popup authentication");
            break;
        case "auth/popup-blocked":
            setState("popup is blocked");
            break;
        case "auth/popup-closed-by-user":
            setState("popup window is closed by the user");
            break;
        case "auth/invalid-user-token":
            setState("invalid user token");
            break;
        case "auth/user-token-expired":
            setState("user token is expired");
            break;
        // case "auth/null-user":
        //     setState("O usuário atual é nulo.");
        //     break;
        case "auth/invalid-api-key":
            setState("invalid api key");
            break;
        case "auth/network-request-failed":
            setState("can't connect to the server");
        //     break;
        // case "auth/requires-recent-login":
        //     setState(
        //         "O último horário de acesso do usuário não atende ao limite de segurança."
        //     );
        //     break;
        case "auth/too-many-requests":
            setState("Too many request to the server right now, please try again later");
            break;
        case "auth/id-token-expired":
            setState("id token is expired");
            break;
        case "auth/invalid-creation-time":
            setState("invalid creation time, try again later");
            break;
        case "auth/invalid-display-name":
            setState("invalid username");
            break;
        case "auth/invalid-email-verified":
            setState("email is not yet verified");
            break;
        case "auth/invalid-id-token":
            setState("id token invalid");
            break;
        case "auth/invalid-password":
            setState("invalid password");
            break;
        case "auth/invalid-password-hash":
            setState("invalid password hash");
            break;
        case "auth/invalid-photo-url":
            setState("invalid user's profile picture");
            break;
        case "auth/invalid-provider-id":
            setState("invalid provider id");
            break;
        case "auth/invalid-session-cookie-duration":
            setState("session cookie duration is invalid");
            break;
        case "auth/invalid-uid":
            setState("invalid user id");
            break;
        case "auth/maximum-user-count-exceeded":
            setState("maximum user count is exceeded");
            break;
        case "auth/missing-uid":
            setState("missing user id");
            break;
        case "auth/session-cookie-revoked":
            setState("session cookie is revoked");
            break;
        case "auth/uid-alread-exists":
            setState("user id is already exist");
            break;
        case "auth/email-already-exists":
            setState("email is already exist, please try another address");
            break;
        case "auth/phone-number-already-exists":
            setState("phone number is already exist");
            break;
        case "auth/project-not-found":
            setState("firebase project not found");
            break;
        case "auth/insufficient-permission":
            setState("insufficient permisson, you are not allowed to do this");
            break;
        case "auth/internal-error":
            setState("an unknown error occured on the client");
            break;
        default:
            setState("");
            break;
    }
}
