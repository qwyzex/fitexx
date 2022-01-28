import SignUpForm from "../components/SignUp";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { redirect } from "../functions";
import Head from "next/head";
import Loading from "../components/Loading";

const SignUpPage = () => {
    const [user] = useAuthState(auth);
    const [loaded, setLoaded] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        if (user) {
            setIsUser(true);
            redirect("/");
        }
        setTimeout(() => {
            setLoaded(true);
        }, 1);
    }, [user]);

    return (
        <>
            <Head>
                <title>Sign Up - QTA</title>
            </Head>
            {loaded ? isUser ? null : <Form /> : <Loading />}
        </>
    );
};

const Form = () => {
    return (
        <div>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
