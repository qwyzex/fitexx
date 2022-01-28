import { signOut } from "firebase/auth";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import styles from "../styles/AccountTab.module.sass";

const AccountTab = (props: any) => {
    const [user] = useAuthState(auth);

    return (
        <div className={styles.container}>
            <header>
                <button onClick={() => props.setStateRef(!props.stateRef)}>CLOSE</button>
            </header>
            <main>
                <div>
                    <Image
                        src={user?.photoURL ? user?.photoURL : "/favicon.ico"}
                        alt=""
                        width={60}
                        height={60}
                    />
                </div>
                <div>
                    <label>Username</label>
                    <p>{user?.displayName === "" ? "QTA User" : user!.displayName}</p>
                </div>
                <div>
                    <label>Email</label>
                    <p>{user?.email && user.email}</p>
                </div>
            </main>
            <footer>
                <button onClick={() => signOut(auth)}>LOGOUT</button>
            </footer>
        </div>
    );
};

export default AccountTab;
