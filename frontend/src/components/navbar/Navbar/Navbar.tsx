"use client";

import Avatar from "../Avatar/Avatar";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Avatar />
        </div>
    );
}
