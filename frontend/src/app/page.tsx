"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import MobileNavbar from "@/components/navbar/MobileNavbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar/Navbar";
import ProjectPage from "@/components/project-page/ProjectPage/ProjectPage";
import Skills from "@/components/skill-page/Skills/Skills";
import useHandleWindowResize from "@/hooks/useHandleWindowResize";
import { TABLET_BREAKPOINT } from "@/utils/constants";
import styles from "./page.module.css";

export default function Home() {
    const windowWidth = useHandleWindowResize();
    let navbarElement = <></>;

    if (!windowWidth) {
        navbarElement = <Navbar />;
    } else if (windowWidth <= TABLET_BREAKPOINT) {
        navbarElement = <MobileNavbar />;
    } else {
        navbarElement = <Navbar />;
    }

    return (
        <main className={styles.main}>
            {navbarElement}
            <div className={styles.pages}>
                <div className={`${styles.page} ${styles.aboutMePage}`}>
                    <AboutMe />
                </div>
                <div className={styles.page}>
                    <Skills />
                </div>
                <div className={styles.page}>
                    <ProjectPage />
                </div>
            </div>
        </main>
    );
}
