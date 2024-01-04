"use client";

import NavbarLinks from "@/components/NavbarLinks/NavbarLinks";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "../Avatar/Avatar";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    function toggleNavbar() {
        setIsOpen((isOpen) => !isOpen);
    }

    let navbarClasses = styles.container;
    let toggleNavbarButtonClasses = styles.toggleNavbarButton;
    if (!isOpen) {
        navbarClasses += ` ${styles.dontShow}`;
        toggleNavbarButtonClasses = styles.toggleNavbarButtonWithNavbarClosed;
    }

    let hamburgerMenuColor: "white" | "black" | null = null;
    if (isOpen) {
        hamburgerMenuColor = "white";
    } else {
        hamburgerMenuColor = "black";
    }

    return (
        <nav className={navbarClasses}>
            <RxHamburgerMenu
                color={hamburgerMenuColor}
                id={styles.toggleNavbarButton}
                className={toggleNavbarButtonClasses}
                onClick={toggleNavbar}
            />
            <Avatar />
            <NavbarLinks />
        </nav>
    );
}
