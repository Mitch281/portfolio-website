"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import ProjectPage from "@/components/project-page/ProjectPage/ProjectPage";
import Skills from "@/components/skill-page/Skills/Skills";
import styles from "./page.module.css";

export default function Home() {
    return (
        <ScreenLayout>
            <PageLayout extraClasses={[styles.aboutMePage]}>
                <AboutMe />
            </PageLayout>
            <PageLayout>
                <Skills />
            </PageLayout>
            <PageLayout>
                <ProjectPage />
            </PageLayout>
        </ScreenLayout>
    );
}
