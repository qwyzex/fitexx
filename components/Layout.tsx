import styles from "../styles/Layout.module.sass";

export default function Layout({ children }: any) {
    return <div className={styles.app}>{children}</div>;
}
