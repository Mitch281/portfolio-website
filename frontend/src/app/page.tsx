import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/navbar/Navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.pages}>
                <div className={styles.page}>
                    <AboutMe />
                </div>
                <div className={styles.page}>
                    <Skills />
                </div>
                <div className={styles.page}>
                    <Projects />
                </div>
            </div>
        </main>
    );
}