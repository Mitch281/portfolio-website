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
        <div id="skills" className={styles.container} ref={ref}>
            <h1>My main skills are</h1>
            <div className={styles.skillCardsContainer}>{skillCards}</div>
            <h2>Other Skills</h2>
            <div className={styles.otherSkillsContainer}>
                <h3>Languages and Frameworks</h3>
                <ul>
                    <li>Next</li>
                    <li>Redux</li>
                    <li>Java</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>Material UI</li>
                </ul>
                <h3>Cloud Providers</h3>
                <ul>
                    <li>
                        AWS - Lambda, EC2, RDS, S3, CloudWatch, IAM, API
                        Gateways
                    </li>
                </ul>
                <h3>Other Tools and Concepts</h3>
                <ul>
                    <li>CI/CD</li>
                    <li>Github Actions</li>
                    <li>Relational Databases</li>
                    <li>Responsive Design</li>
                    <li>JWT Authentication</li>
                </ul>
            </div>
        </div>
    );
}
