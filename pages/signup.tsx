import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { redirect } from "../functions";

import Loading from "../components/Loading";
import SignUpForm from "../components/SignUp";

const SignUpPage: NextPage = () => {
    const [user] = useAuthState(auth);
    const [loaded, setLoaded] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        async function getUserDoc() {
            const usersRef = collection(db, "users");
            const docRef = doc(usersRef, user!.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setLoaded(true);
            } else {
                await setDoc(doc(db, "users", user!.uid), {
                    uid: user!.uid,
                    username: "",
                    bio: "",
                    complete: true,
                })
                    .then(() => {
                        setLoaded(true);
                    })
                    .catch((error: any) => {
                        console.warn(error.code);
                        console.warn(error.message);
                    });
            }
        }

        if (user) {
            setIsUser(true);
            getUserDoc().then(() => redirect("/"));
        }
        setTimeout(() => {
            setLoaded(true);
        }, 600);
    }, [user]);

    return (
        <>
            <Head>
                <title>Sign Up - QTA</title>
            </Head>
            {loaded ? (
                isUser ? null : (
                    <div>
                        <SignUpForm />
                    </div>
                )
            ) : (
                <Loading />
            )}
        </>
    );
};

export default SignUpPage;
