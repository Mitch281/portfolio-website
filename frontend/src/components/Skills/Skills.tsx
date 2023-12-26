"use client";

import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { SiDjango } from "react-icons/si";
import SkillCard from "../SkillCard/SkillCard";
import styles from "./skills.module.css";

type Skill = {
    imageComponent: JSX.Element;
    imageDescription: string;
    isVisible: boolean;
};

const SKILLS: Skill[] = [
    {
        imageComponent: <FaReact className={styles.image} />,
        imageDescription: "React",
        isVisible: false,
    },
    {
        imageComponent: <BiLogoJavascript className={styles.image} />,
        imageDescription: "JavaScript",
        isVisible: false,
    },
    {
        imageComponent: <BiLogoTypescript className={styles.image} />,
        imageDescription: "TypeScript",
        isVisible: false,
    },
    {
        imageComponent: <IoLogoPython className={styles.image} />,
        imageDescription: "Python",
        isVisible: false,
    },
    {
        imageComponent: <SiDjango className={styles.image} />,
        imageDescription: "Django",
        isVisible: false,
    },
];

export default function Skills() {
    const { ref } = useSetNavbarLinkInFocus("Skills");

    const skillCards = SKILLS.map((skill, index) => (
        <div key={index} className={styles.skillCardContainer}>
            <SkillCard
                image={skill.imageComponent}
                imageDescription={skill.imageDescription}
            />
        </div>
    ));

    return (
        <div id="skills" className={styles.container}>
            <h2>My main skills are</h2>
            <div className={styles.skillCardsContainer} ref={ref}>
                {skillCards}
            </div>
        </div>
    );
}
