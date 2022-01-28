import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import Footer from "../components/Footer";
// import LoginForm from "../components/Login";
import { auth } from "../firebase";
import styles from "../styles/Home.module.sass";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Home: NextPage = () => {
    const [user] = useAuthState(auth);

    return (
        <div className={styles.container}>
            <Head>
                <title>qwyzeX Todo App</title>
            </Head>
            {user ? (
                <>
                    <p>Logged In</p>
                    <button onClick={() => signOut(auth)}>sign out</button>
                </>
            ) : (
                <>
                    <Link href={"/login"}>
                        <a>LOGIN</a>
                    </Link>
                    <Link href={"/signup"}>
                        <a>SIGN UP</a>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Home;
