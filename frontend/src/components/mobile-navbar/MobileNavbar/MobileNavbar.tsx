"use client";

import { NavbarContext } from "@/context/NavbarContext";
import Link from "next/link";
import { useContext, useState } from "react";
import MobileNavbarHeader from "../MobileNavbarHeader/MobileNavbarHeader";
import styles from "./mobile-navbar.module.css";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { pageHighlightedOnNavbar } = useContext(NavbarContext);

    function triggerNavbar() {
        setIsOpen((isOpen) => !isOpen);
    }

    let navbarElement = <></>;
    if (isOpen) {
        navbarElement = (
            <div className={styles.navbarContainer}>
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

    return (
        <div className={styles.wholeNavbarContainer}>
            <MobileNavbarHeader isOpen={isOpen} triggerNavbar={triggerNavbar} />
            {navbarElement}
        </div>
    );
}
