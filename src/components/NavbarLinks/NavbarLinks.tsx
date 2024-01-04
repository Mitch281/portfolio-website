"use client";

import { NavbarContext } from "@/context/NavbarContext";
import Link from "next/link";
import { MouseEventHandler, useContext } from "react";
import styles from "./navbar-links.module.css";

type Props = {
    isMobile: boolean;
    toggleNavbar?: Function;
};

export default function NavbarLinks({ isMobile, toggleNavbar }: Props) {
    const { pageHighlightedOnNavbar } = useContext(NavbarContext);
    let onClickHandler: MouseEventHandler<HTMLAnchorElement> = () => {};

    if (isMobile) {
        // We will always pass this closeNavbar function if it is mobile.
        onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) =>
            (toggleNavbar as Function)();
    }

    return (
        <ul className={styles.navList}>
            <li>
                <Link
                    href="/#about-me"
                    className={
                        pageHighlightedOnNavbar === "About Me"
                            ? styles.inFocusLink
                            : styles.link
                    }
                    onClick={
                        onClickHandler as MouseEventHandler<HTMLAnchorElement>
                    }
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    href="/#skills"
                    className={
                        pageHighlightedOnNavbar === "Skills"
                            ? styles.inFocusLink
                            : styles.link
                    }
                    onClick={
                        onClickHandler as MouseEventHandler<HTMLAnchorElement>
                    }
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    href="/#projects"
                    className={
                        pageHighlightedOnNavbar === "Projects"
                            ? styles.inFocusLink
                            : styles.link
                    }
                    onClick={
                        onClickHandler as MouseEventHandler<HTMLAnchorElement>
                    }
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    href="/blogs"
                    className={
                        pageHighlightedOnNavbar === "Blog"
                            ? styles.inFocusLink
                            : styles.link
                    }
                    onClick={
                        onClickHandler as MouseEventHandler<HTMLAnchorElement>
                    }
                >
                    Blog
                </Link>
            </li>
        </ul>
    );
}
