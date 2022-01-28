import Link from "next/link";
import type { NextComponentType } from "next";
import styles from "../styles/Footer.module.sass";

import { auth, user } from "../firebase";

const Footer: NextComponentType = () => {
    return (
        <footer className={styles.container}>
            <nav>
                <ul className={styles.listWrapper}>
                    <li className={styles.listItem}>
                        <Link href={"/dashboard"}>
                            <a>DASHBOARD</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={"/account"}>
                            <a>ACCOUNT</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
