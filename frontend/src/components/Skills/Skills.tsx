"use client";

import { useEffect, useReducer, useRef } from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { SiDjango } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import SkillCard from "../SkillCard/SkillCard";
import styles from "./skills.module.css";

type Action = {
    type: "HIDE" | "SHOW";
    payload: {
        cardNumber: number;
    };
};

function skillCardsAnimationReducer(state: string[], action: Action): string[] {
    const skillCardIndex = action.payload.cardNumber - 1;
    switch (action.type) {
        case "HIDE":
            return state.map((extraClass, index) => {
                if (skillCardIndex === index) {
                    return styles.displayNone;
                }
                return "";
            });
        case "SHOW":
            return state.map((extraClass, index) => {
                if (skillCardIndex === index) {
                    return "";
                }
                return styles.displayNone;
            });
    }
}

export default function Skills() {
    const { ref, inView } = useInView();
    const initialState: string[] = [
        styles.displayNone,
        styles.displayNone,
        styles.displayNone,
        styles.displayNone,
        styles.displayNone,
    ];
    const [skillCardAnimationState, dispatch] = useReducer(
        skillCardsAnimationReducer,
        initialState
    );

    let indexAnimatedRef = useRef<number>(0);

    useEffect(() => {
        console.log("made it");
        console.log(inView);
        let interval: NodeJS.Timeout | null = null;
        console.log(indexAnimatedRef.current);
        if (inView) {
            indexAnimatedRef.current = 0;
            interval = setInterval(() => {
                dispatch({
                    type: "SHOW",
                    payload: { cardNumber: indexAnimatedRef.current + 1 },
                });
                indexAnimatedRef.current += 1;
                if (indexAnimatedRef.current === initialState.length) {
                    clearInterval(interval as NodeJS.Timeout);
                }
            }, 1000);
        } else {
            indexAnimatedRef.current = 0;
            interval = setInterval(() => {
                dispatch({
                    type: "HIDE",
                    payload: { cardNumber: indexAnimatedRef.current + 1 },
                });
                if (indexAnimatedRef.current === initialState.length) {
                    clearInterval(interval as NodeJS.Timeout);
                }
                indexAnimatedRef.current += 1;
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [inView]);

    return (
        <div id="skills" className={styles.container} ref={ref}>
            <h2>My main skills are</h2>
            <div
                className={`${styles.skillCardsContainer} ${skillCardAnimationState[0]}`}
            >
                <div className={styles.skillCardContainer}>
                    <SkillCard
                        image={<FaReact className={styles.image} />}
                        imageDescription="React"
                    />
                </div>
                <div
                    className={`${styles.skillCardsContainer} ${skillCardAnimationState[1]}`}
                >
                    <SkillCard
                        image={<BiLogoJavascript className={styles.image} />}
                        imageDescription="JavaScript"
                    />
                </div>
                <div
                    className={`${styles.skillCardsContainer} ${skillCardAnimationState[2]}`}
                >
                    <SkillCard
                        image={<BiLogoTypescript className={styles.image} />}
                        imageDescription="TypeScript"
                    />
                </div>
                <div
                    className={`${styles.skillCardsContainer} ${skillCardAnimationState[3]}`}
                >
                    <SkillCard
                        image={<IoLogoPython className={styles.image} />}
                        imageDescription="Python"
                    />
                </div>
                <div
                    className={`${styles.skillCardsContainer} ${skillCardAnimationState[4]}`}
                >
                    <SkillCard
                        image={<SiDjango className={styles.image} />}
                        imageDescription="Django"
                    />
                </div>
            </div>
        </div>
    );
}
