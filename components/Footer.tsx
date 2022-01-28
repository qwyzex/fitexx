import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Footer.module.sass";
import AccountTab from "./AccountTab";

const Footer = () => {
    const [openAccountTab, setOpenAccountTab] = useState(false);

    return (
        <>
            {openAccountTab && (
                <AccountTab
                    setStateRef={openAccountTab && setOpenAccountTab}
                    stateRef={openAccountTab && openAccountTab}
                />
            )}
            <footer className={styles.container}>
                <nav>
                    <ul className={styles.listWrapper}>
                        <li className={styles.listItem}>
                            <button onClick={() => setOpenAccountTab(false)}>
                                DASHBOARD
                            </button>
                        </li>
                        <li className={styles.listItem}>
                            <button onClick={() => setOpenAccountTab(!openAccountTab)}>
                                ACCOUNT
                            </button>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
