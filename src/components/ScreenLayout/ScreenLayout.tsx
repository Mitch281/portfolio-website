"use client";

import useHandleWindowResize from "@/hooks/useHandleWindowResize";
import { TABLET_BREAKPOINT } from "@/utils/constants";
import MobileNavbar from "../mobile-navbar/MobileNavbar/MobileNavbar";
import Navbar from "../navbar/Navbar/Navbar";
import styles from "./screen-layout.module.css";

export default function ScreenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const windowWidth = useHandleWindowResize();
    let navbarElement = <></>;

    if (!windowWidth) {
        return <></>;
    }

    if (windowWidth <= TABLET_BREAKPOINT) {
        navbarElement = <MobileNavbar />;
    } else {
        navbarElement = <Navbar />;
    }

    return (
        <main className={styles.main}>
            {navbarElement}
            <div className={styles.pages}>{children}</div>
        </main>
    );
}
