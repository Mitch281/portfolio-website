"use client";

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./mobile-navbar-header.module.css";

type Props = {
    isOpen: boolean;
    triggerNavbar: () => void;
};

export default function MobileNavbarHeader({ isOpen, triggerNavbar }: Props) {
    let navbarIcon = <></>;
    if (!isOpen) {
        navbarIcon = (
            <RxHamburgerMenu
                color="white"
                className={styles.navbarIcon}
                onClick={triggerNavbar}
            />
        );
    } else {
        navbarIcon = (
            <AiOutlineClose
                color="white"
                className={styles.navbarIcon}
                onClick={triggerNavbar}
            />
        );
    }

    return <div className={styles.navbarHeader}>{navbarIcon}</div>;
}
