"use client";

import { useEffect, useState } from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { SiDjango } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import SkillCard from "../SkillCard/SkillCard";
import styles from "./skills.module.css";

type Skill = {
    imageComponent: JSX.Element;
    imageDescription: string;
};

export default function Skills() {
    const { ref, inView } = useInView();

    const skillsToBeRendered: Skill[] = [
        {
            imageComponent: <FaReact className={styles.image} />,
            imageDescription: "React",
        },
        {
            imageComponent: <BiLogoJavascript className={styles.image} />,
            imageDescription: "JavaScript",
        },
        {
            imageComponent: <BiLogoTypescript className={styles.image} />,
            imageDescription: "TypeScript",
        },
        {
            imageComponent: <IoLogoPython className={styles.image} />,
            imageDescription: "Python",
        },
        {
            imageComponent: <SiDjango className={styles.image} />,
            imageDescription: "Django",
        },
    ];
    const [skillsActuallyRendered, setSkillsActuallyRendered] = useState<
        Skill[]
    >([]);

    let index = 0;

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (inView) {
            console.log("interval created");
            interval = setInterval(() => {
                setSkillsActuallyRendered((skillsActuallyRendered) => [
                    ...skillsActuallyRendered,
                    skillsToBeRendered[index],
                ]);
                index += 1;
                if (index === skillsToBeRendered.length) {
                    console.log("interval cleared because reached end.");
                    clearInterval(interval as NodeJS.Timeout);
                    index = 0;
                }
            }, 1000);
        } else {
            setSkillsActuallyRendered([]);
        }

        return () => {
            if (interval) {
                console.log("interval cleared in cleanup function");
                clearInterval(interval);
            }
        };
    }, [inView]);

    const skillCards = skillsActuallyRendered.map((skill, index) => (
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
