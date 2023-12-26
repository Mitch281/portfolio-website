"use client";

import { NavbarContext } from "@/context/NavbarContext";
import Link from "next/link";
import { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./navbar.module.css";

export default function Navbar() {
    const { pageHighlightedOnNavbar } = useContext(NavbarContext);

    return (
        <div className={styles.container}>
            <Avatar />
            <Link
                href="#about-me"
                className={
                    pageHighlightedOnNavbar === "About Me"
                        ? styles.inFocusLink
                        : ""
                }
            >
                About Me
            </Link>
            <Link
                href="#skills"
                className={
                    pageHighlightedOnNavbar === "Skills"
                        ? styles.inFocusLink
                        : ""
                }
            >
                Skills
            </Link>
            <Link
                href="#projects"
                className={
                    pageHighlightedOnNavbar === "Projects"
                        ? styles.inFocusLink
                        : ""
                }
            >
                Projects
            </Link>
            <Link href="blog">Blog</Link>
        </div>
    );
}
