import AboutMe from "@/components/AboutMe/AboutMe";
import Navbar from "@/components/navbar/Navbar/Navbar";
import ProjectPage from "@/components/project-page/ProjectPage/ProjectPage";
import Skills from "@/components/skill-page/Skills/Skills";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
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
