import { signOut } from "firebase/auth";
import { collection, doc, getDoc, limit, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import styles from "../styles/AccountTab.module.sass";
import { useEffect, useState } from "react";

const AccountTab = (props: any) => {
    const [user] = useAuthState(auth);
    const [userData, setUserData]: any = useState(null);

    useEffect(() => {
        async function xx() {
            const userRef = collection(db, "users");
            const userCol = doc(userRef, user!.uid);
            const docSnap = await getDoc(userCol);

            if (docSnap.exists()) {
                console.log(docSnap.data());
                // const data = await docSnap.json()
                setUserData(docSnap.data().json());
            }
        }
        xx();
    }, [user]);
    setTimeout(() => {
        console.log(userData);
    }, 2000);

    return (
        <div className={`${styles.container} ${props.cls}`}>
            <header>
                <button onClick={() => props.setStateRef(!props.stateRef)}>CLOSE</button>
            </header>
            {userData &&
                userData.map((ex: any) => (
                    <>
                        <p key={ex.uid}>UID: {ex.uid}</p>
                        <p key={ex.uid}>BIO: {ex.bio}</p>
                        <p key={ex.uid}>USERNAME: {ex.username}</p>
                    </>
                ))}
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
