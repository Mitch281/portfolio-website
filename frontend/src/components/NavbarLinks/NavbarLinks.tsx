"use client";

import { NavbarContext } from "@/context/NavbarContext";
import Link from "next/link";
import { useContext } from "react";
import styles from "./navbar-links.module.css";

export default function NavbarLinks() {
    const { pageHighlightedOnNavbar } = useContext(NavbarContext);

    return (
        <>
            <Link
                href="/#about-me"
                className={
                    pageHighlightedOnNavbar === "About Me"
                        ? styles.inFocusLink
                        : ""
                }
            >
                About Me
            </Link>
            <Link
                href="/#skills"
                className={
                    pageHighlightedOnNavbar === "Skills"
                        ? styles.inFocusLink
                        : ""
                }
            >
                Skills
            </Link>
            <Link
                href="/#projects"
                className={
                    pageHighlightedOnNavbar === "Projects"
                        ? styles.inFocusLink
                        : ""
                }
            >
                Projects
            </Link>
            <Link
                href="/blogs"
                className={
                    pageHighlightedOnNavbar === "Blog" ? styles.inFocusLink : ""
                }
            >
                Blog
            </Link>
        </>
    );
}
