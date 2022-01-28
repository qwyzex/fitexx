import type { NextPage } from "next";
import { redirect } from "../functions";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import Login from "../components/Login";
import { auth, db } from "../firebase";
import Loading from "../components/Loading";

const LoginPage: NextPage = () => {
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

    return loaded ? isUser ? null : <Login /> : <Loading />;
};

export default LoginPage;
