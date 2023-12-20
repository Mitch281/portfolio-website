"use client";

import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Avatar />
            <Link href="#about-me">About Me</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
        </div>
    );
}
