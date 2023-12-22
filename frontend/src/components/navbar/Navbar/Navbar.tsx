"use client";

import { NavbarContext } from "@/context/NavbarContext";
import Link from "next/link";
import { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./navbar.module.css";

export default function Navbar() {
    const { linkInFocusOnNavbar, setLinkInFocusOnNavbar } =
        useContext(NavbarContext);

    return (
        <div className={styles.container}>
            <Avatar />
            <Link
                href="#about-me"
                className={
                    linkInFocusOnNavbar === "About Me" ? styles.inFocusLink : ""
                }
            >
                About Me
            </Link>
            <Link
                href="#skills"
                className={
                    linkInFocusOnNavbar === "Skills" ? styles.inFocusLink : ""
                }
            >
                Skills
            </Link>
            <Link
                href="#projects"
                className={
                    linkInFocusOnNavbar === "Projects" ? styles.inFocusLink : ""
                }
            >
                Projects
            </Link>
            <Link href="blog">Blog</Link>
        </div>
    );
}
