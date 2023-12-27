"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import PageLayout from "@/components/PageLayout/PageLayout";
import ProjectPage from "@/components/project-page/ProjectPage/ProjectPage";
import Skills from "@/components/skill-page/Skills/Skills";
import styles from "./page.module.css";

export default function Home() {
    return (
        <PageLayout>
            <div className={`${styles.page} ${styles.aboutMePage}`}>
                <AboutMe />
            </div>
            <div className={styles.page}>
                <Skills />
            </div>
            <div className={styles.page}>
                <ProjectPage />
            </div>
        </PageLayout>
    );
}
