import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/navbar/Navbar/Navbar";
import ProjectPage from "@/components/projects/ProjectPage/ProjectPage";
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
