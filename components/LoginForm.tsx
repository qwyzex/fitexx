import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { firebaseError, redirect } from "../functions";
import styles from "../styles/LoginForm.module.sass";

const LoginForm = () => {
    const [formValueEmail, setFormValueEmail] = useState("");
    const [formValuePassword, setFormValuePassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [formError, setFormError] = useState("");

    async function loginTodoApp() {
        await signInWithEmailAndPassword(auth, formValueEmail, formValuePassword)
            .then(() => {
                setLoading(false);
                redirect("/");
            })
            .catch((error) => {
                setLoading(false);
                const code = error.code;

                firebaseError(code, setFormError);
            });
    }

    return (
        <form
            className={`${styles.form} form`}
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                loginTodoApp();
            }}
        >
            <div className={`${styles.wrapper} ${styles.email}`}>
                <label htmlFor="formEmail">Email</label>
                <input
                    autoFocus
                    type={"email"}
                    name="Email"
                    id="formEmail"
                    className="form input"
                    placeholder="address@company.com"
                    value={formValueEmail}
                    onChange={(e) => {
                        setFormValueEmail(e.target.value);
                    }}
                />
            </div>
            <div className={`${styles.wrapper} ${styles.password}`}>
                <label htmlFor="formPassword">Password</label>
                <input
                    type={"password"}
                    name="Password"
                    id="formPassword"
                    className="form input"
                    placeholder="Your Password"
                    value={formValuePassword}
                    onChange={(e) => {
                        setFormValuePassword(e.target.value);
                    }}
                />
            </div>
            <div className={`${styles.wrapper} ${styles.submit}`}>
                <input
                    type="submit"
                    name="Submit"
                    id="formSubmit"
                    disabled={loading && true}
                    value={loading ? "Logging In..." : "Log In"}
                />
            </div>
            <div className="formError">{formError != "" && <p>{formError}</p>}</div>
        </form>
    );
};

export default LoginForm;
