import type { NextPage } from "next";
import Login from "../components/Login";
import { redirect } from "../functions";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loading from "../components/Loading";

const LoginPage: NextPage = () => {
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

    return <>{loaded ? isUser ? null : <Login /> : <Loading />}</>;
};

export default LoginPage;
