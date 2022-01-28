import { useEffect } from "react";
import { redirect } from "../functions";

const Error404 = () => {
    useEffect(() => {
        redirect("/");
    }, []);

    return <div></div>;
};

export default Error404;
