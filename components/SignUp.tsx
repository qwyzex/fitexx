import Link from "next/link";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db /* , user */ } from "../firebase";
import { firebaseError, redirect } from "../functions";
import styles from "../styles/SignUp.module.sass";
import { addDoc, collection, query, where, setDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { stringify } from "querystring";

const SignUpForm = () => {
    const [user] = useAuthState(auth);
    const [activeTab, setActiveTab] = useState("createNewUser");

    // form values
    const [formValueEmail, setFormValueEmail] = useState("");
    const [formValuePassword, setFormValuePassword] = useState("");

    // user creds values
    const [formValueUsername, setFormValueUsername] = useState("");
    const [formValueBio, setFormValueBio] = useState("");

    // misc
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    async function createNewUser() {
        await createUserWithEmailAndPassword(auth, formValueEmail, formValuePassword)
            .then(() => {
                setLoading(false);
                setActiveTab("createUserCredentials");
                setFormError("");
            })
            .catch((error) => {
                setLoading(false);
                const code = error.code;
                firebaseError(code, setFormError);
            });
    }

    async function updateUserCred(e: any) {
        e.preventDefault();
        setLoading(true);
        await setDoc(doc(db, "users", user!.uid), {
            uid: user!.uid,
            username: formValueUsername,
            bio: formValueBio,
            complete: true,
        })
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                const code = error.code;
                firebaseError(code, setFormError);
            });
    }

    return (
        <>
            {activeTab === "createNewUser" ? (
                <form
                    className={`${styles.form} form`}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setLoading(true);
                        createNewUser();
                    }}
                >
                    <div className="wrapper">
                        <label htmlFor="formEmail">Email</label>
                        <input
                            id="formEmail"
                            type="email"
                            value={formValueEmail}
                            onChange={(e) => setFormValueEmail(e.target.value)}
                        />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="formPassword">Password</label>
                        <input
                            id="formPassword"
                            type="password"
                            value={formValuePassword}
                            onChange={(e) => setFormValuePassword(e.target.value)}
                        />
                    </div>
                    <div className="wrapper">
                        <input
                            id="submit"
                            type="submit"
                            value={loading ? "PLEASE WAIT..." : "CONTINUE"}
                        />
                    </div>
                    <footer></footer>
                </form>
            ) : (
                <form className={`${styles.form} form`} onSubmit={updateUserCred}>
                    <div className="wrapper">
                        <label htmlFor="formUsername">Username</label>
                        <input
                            id="formUsername"
                            type="text"
                            value={formValueUsername}
                            onChange={(e) => setFormValueUsername(e.target.value)}
                        />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="formBio">Bio</label>
                        <input
                            id="formBio"
                            type="text"
                            value={formValueBio}
                            onChange={(e) => setFormValueBio(e.target.value)}
                        />
                    </div>
                    <div className="wrapper">
                        <input
                            id="userCredSubmit"
                            type="submit"
                            value={loading ? "CREATING NEW USER..." : "SIGN UP"}
                        />
                    </div>
                </form>
            )}
            <div className="formError">{formError != "" && <p>{formError}</p>}</div>
        </>
    );
};

export default SignUpForm;
