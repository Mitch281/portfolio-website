"use client";

import { NavbarContext } from "@/context/NavbarContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "../Avatar/Avatar";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const { pageHighlightedOnNavbar } = useContext(NavbarContext);

    function toggleNavbar() {
        setIsOpen((isOpen) => !isOpen);
    }

    let navbarClasses = styles.container;
    let toggleNavbarButtonClasses = styles.toggleNavbarButton;
    if (!isOpen) {
        navbarClasses += ` ${styles.dontShow}`;
        toggleNavbarButtonClasses = styles.toggleNavbarButtonWithNavbarClosed;
    }

    return (
        <nav className={navbarClasses}>
            <RxHamburgerMenu
                id={styles.toggleNavbarButton}
                className={toggleNavbarButtonClasses}
                onClick={toggleNavbar}
            />
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
        </nav>
    );
}
