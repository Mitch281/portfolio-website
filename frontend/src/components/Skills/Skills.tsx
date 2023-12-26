"use client";

import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import Image from "next/image";
import { useEffect, useState } from "react";
import SkillCard from "../SkillCard/SkillCard";
import styles from "./skills.module.css";

type Skill = {
    imageComponent: JSX.Element;
    imageDescription: string;
};

const SKILLS: Skill[] = [
    {
        imageComponent: (
            <Image
                className={styles.image}
                src="/react-icon.svg"
                alt="React Icon"
                fill
            />
        ),
        imageDescription: "React",
    },
    {
        imageComponent: (
            <Image
                className={styles.image}
                src="/redux-logo.svg"
                alt="Redux Logo"
                fill
            />
        ),
        imageDescription: "Redux",
    },
    {
        imageComponent: (
            <Image
                className={styles.image}
                src="/javascript-logo.png"
                alt="JavaScript Logo"
                fill
            />
        ),
        imageDescription: "JavaScript",
    },
    {
        imageComponent: (
            <Image
                className={styles.image}
                src="/typescript-logo.svg"
                alt="TypeScript Logo"
                fill
            />
        ),
        imageDescription: "TypeScript",
    },
    {
        imageComponent: (
            <Image
                className={styles.image}
                src="/python-logo.svg"
                alt="Python Logo"
                fill
            />
        ),
        imageDescription: "Python",
    },
    {
        imageComponent: (
            <Image
                className={styles.image}
                src="/django-logo.svg"
                alt="Django Logo"
                fill
            />
        ),
        imageDescription: "Django",
    },
];

export default function Skills() {
    const { ref, inView } = useSetNavbarLinkInFocus("Skills");
    const [skillCardsContainerClasses, setSkillCardsContainerClasses] =
        useState(styles.skillCardsContainer);

    const skillCards = SKILLS.map((skill, index) => (
        <div key={index} className={styles.skillCardContainer}>
            <SkillCard image={skill.imageComponent} />
            <span className={styles.imageDescription}>
                {skill.imageDescription}
            </span>
        </div>
    ));

    useEffect(() => {
        if (inView) {
            setSkillCardsContainerClasses(`${styles.skillCardsContainer}`);
        } else {
            setSkillCardsContainerClasses(
                `${styles.skillCardsContainer} ${styles.displayNone}`
            );
        }
    }, [inView]);

    return (
        <div id="skills" className={styles.container} ref={ref}>
            <h1>My main skills are</h1>
            <div className={skillCardsContainerClasses}>{skillCards}</div>
            <h2>Other Skills</h2>
            <div className={styles.otherSkillsContainer}>
                <h3 className={styles.otherSkillsHeader}>
                    Languages and Frameworks
                </h3>
                <ul>
                    <li>Next</li>
                    <li>Java</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>Material UI</li>
                </ul>
                <h3 className={styles.otherSkillsHeader}>Cloud Providers</h3>
                <ul>
                    <li>
                        AWS - Lambda, EC2, RDS, S3, CloudWatch, IAM, API
                        Gateways
                    </li>
                </ul>
                <h3 className={styles.otherSkillsHeader}>
                    Other Tools and Concepts
                </h3>
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
