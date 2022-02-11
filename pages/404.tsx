import type { NextPage } from "next";
import { useEffect } from "react";
import { redirect } from "../functions";

const Error404: NextPage = () => {
    useEffect(() => {
        redirect("/");
    }, []);

    return <></>;
};

export default Error404;
