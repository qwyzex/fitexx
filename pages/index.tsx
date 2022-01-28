import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "../styles/Home.module.sass";

const Home: NextPage = () => {
    const [user] = useAuthState(auth);

    return (
        <div className={styles.container}>
            <Head>
                <title>qwyzeX Todo App</title>
            </Head>
            {user ? (
                <>
                    <Dashboard />
                    <Footer />
                </>
            ) : (
                <div>
                    <Link href={"/login"}>
                        <a>LOGIN</a>
                    </Link>
                    <Link href={"/signup"}>
                        <a>SIGN UP</a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Home;
