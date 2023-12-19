import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/navbar/Navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Skills />
            <Projects />
        </main>
    );
}
