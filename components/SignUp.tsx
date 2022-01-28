import Link from "next/link";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { firebaseError, redirect } from "../functions";
import styles from "../styles/SignUp.module.sass";

const SignUpForm = () => {
    const [formValueEmail, setFormValueEmail] = useState("");
    const [formValuePassword, setFormValuePassword] = useState("");
    const [loading, setLoading] = useState(false);

    // errors
    const [formError, setFormError] = useState("");

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const validation = (formValuePassword.length > 6, formValueEmail != "");

    async function createNewUser() {
        console.log(validation);

        createUserWithEmailAndPassword(auth, formValueEmail, formValuePassword)
            .then(() => {
                setLoading(false);
                redirect("/");
            })
            .catch((error) => {
                setLoading(false);
                const code = error.code;

                // console.error("ERROR YOU STUPID HOOMAN");
                console.warn("CODE: ", code);
                console.warn("NAME: ", error.name);
                console.warn("MESSAGE: ", error.message);

                firebaseError(code, setFormError);
            });
    }

    return (
        <form
            className={`${styles.form} form`}
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                createNewUser();
            }}
        >
            <h1>SIGN UP</h1>
            <div className="wrapper">
                <label htmlFor="formEmail">Email</label>
                <input
                    autoFocus
                    type="text"
                    name="Email"
                    id="formEmail"
                    className="form input"
                    value={formValueEmail}
                    onChange={(e) => setFormValueEmail(e.target.value)}
                />
            </div>
            <div className="wrapper">
                <label htmlFor="formPassword">Password</label>
                <input
                    type={"password"}
                    name="Password"
                    id="formPassword"
                    className="form input"
                    value={formValuePassword}
                    onChange={(e) => setFormValuePassword(e.target.value)}
                />
            </div>
            <div className="wrapper">
                <input
                    type="submit"
                    name="Submit"
                    id="formSubmit"
                    disabled={loading && true}
                    value={loading ? "CREATING NEW USER..." : "SIGN UP"}
                />
            </div>
            <footer className="form footer">
                <div>
                    <p>Already Have An Account?</p>
                    <Link href="/login">
                        <a>LOG IN</a>
                    </Link>
                </div>
            </footer>
            <div className="formError">{formError != "" && <p>{formError}</p>}</div>
        </form>
    );
};

export default SignUpForm;
