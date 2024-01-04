"use client";

import NavbarLinks from "@/components/NavbarLinks/NavbarLinks";
import { useState } from "react";
import MobileNavbarHeader from "../MobileNavbarHeader/MobileNavbarHeader";
import styles from "./mobile-navbar.module.css";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar() {
        setIsOpen((isOpen) => !isOpen);
    }

    let navbarClasses = styles.navbarContainer;
    if (!isOpen) {
        navbarClasses += ` ${styles.dontShow}`;
    }

    return (
        <div className={styles.wholeNavbarContainer}>
            <MobileNavbarHeader isOpen={isOpen} toggleNavbar={toggleNavbar} />
            <nav className={navbarClasses}>
                <NavbarLinks isMobile={true} toggleNavbar={toggleNavbar} />
            </nav>
        </div>
    );
}
