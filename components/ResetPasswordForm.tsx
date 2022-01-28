import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import styles from "../styles/ResetPasswordForm.module.sass";

export default function ResetPasswordForm() {
    const [formValueEmail, setFormValueEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [sended, setSended] = useState(false);

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
                setFormValueEmail("");
                setLoading(false);
                setSended(true);
            })
            .catch((error) => {
                setLoading(false);
                const code = error.code;
                alert(
                    code === "auth/missing-email"
                        ? "Please Enter An Email"
                        : code === "auth/invalid-email"
                        ? "Please Enter A Valid Email Address"
                        : code === "auth/network-request-failed"
                        ? "Can't Connect To The Server"
                        : "An Error Occured On The Client"
                );
            });
    }

    return (
        <form onSubmit={sendEmail} className={styles.form}>
            <label htmlFor="formEmail">EMAIL</label>
            <input
                autoFocus
                type="email"
                name="Email"
                id="formEmail"
                value={formValueEmail}
                onChange={(e) => setFormValueEmail(e.target.value)}
            />
            <button type="submit">{loading ? "SENDING..." : "SEND EMAIL"}</button>
            {sended && <p>Please Check Your Email To Reset The Password</p>}
        </form>
    );
}
