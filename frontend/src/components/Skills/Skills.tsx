import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { SiDjango } from "react-icons/si";
import SkillCard from "../SkillCard/SkillCard";
import styles from "./skills.module.css";

export default function Skills() {
    return (
        <div id="skills" className={styles.container}>
            <h2>My main skills are</h2>
            <div className={styles.skillCardsContainer}>
                <SkillCard
                    image={<FaReact className={styles.image} />}
                    imageDescription="React"
                />
                <SkillCard
                    image={<BiLogoJavascript className={styles.image} />}
                    imageDescription="JavaScript"
                />
                <SkillCard
                    image={<BiLogoTypescript className={styles.image} />}
                    imageDescription="TypeScript"
                />
                <SkillCard
                    image={<IoLogoPython className={styles.image} />}
                    imageDescription="Python"
                />
                <SkillCard
                    image={<SiDjango className={styles.image} />}
                    imageDescription="Django"
                />
            </div>
        </div>
    );
}
