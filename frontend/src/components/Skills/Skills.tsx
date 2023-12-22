"use client";

import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import { useEffect, useState } from "react";
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

export default function Skills() {
    const { ref, inView } = useSetNavbarLinkInFocus("Skills");

    const skillsToBeRendered: Skill[] = [
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
    const [skillsActuallyRendered, setSkillsActuallyRendered] = useState<
        Skill[]
    >([
        {
            imageComponent: <></>,
            imageDescription: "",
            isVisible: false,
        },
        {
            imageComponent: <></>,
            imageDescription: "",
            isVisible: false,
        },
        {
            imageComponent: <></>,
            imageDescription: "",
            isVisible: false,
        },
        {
            imageComponent: <></>,
            imageDescription: "",
            isVisible: false,
        },
        {
            imageComponent: <></>,
            imageDescription: "",
            isVisible: false,
        },
    ]);

    let index = 0;

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (inView) {
            interval = setInterval(() => {
                setSkillsActuallyRendered((skillsActuallyRendered) => [
                    ...skillsActuallyRendered,
                    skillsToBeRendered[index],
                ]);
                index += 1;
                if (index === skillsToBeRendered.length) {
                    clearInterval(interval as NodeJS.Timeout);
                    index = 0;
                }
            }, 1000);
        } else {
            setSkillsActuallyRendered([]);
        }

        return () => {
            if (interval) {
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
