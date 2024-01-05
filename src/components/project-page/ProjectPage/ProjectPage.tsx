"use client";

import useHandleWindowResize from "@/hooks/useHandleWindowResize";
import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import { MOBILE_BREAKPOINT } from "@/utils/constants";
import Image from "next/image";
import Project from "../Project/Project";
import styles from "./project-page.module.css";

type Dimension = {
    width?: number;
    height?: number;
};

type GifSizingProps = {
    width?: number;
    height?: number;
    fill?: boolean;
};

export default function ProjectPage() {
    const { ref } = useSetNavbarLinkInFocus("Projects");
    const windowWidth = useHandleWindowResize();

    const conwaysGameOfLifeGifDimensions: Dimension = {};
    const sudokuGifDimensions: Dimension = {};
    let conwaysGameOfLifeGifSizing: GifSizingProps = {};
    let sudokuGifSizing: GifSizingProps = {};
    if (windowWidth && windowWidth <= MOBILE_BREAKPOINT) {
        conwaysGameOfLifeGifDimensions.width = windowWidth * 0.8;
        sudokuGifDimensions.width = windowWidth * 0.8;

        conwaysGameOfLifeGifDimensions.height =
            conwaysGameOfLifeGifDimensions.width * 0.73;
        sudokuGifDimensions.height = sudokuGifDimensions.width;

        conwaysGameOfLifeGifSizing = {
            ...conwaysGameOfLifeGifDimensions,
            fill: false,
        };
        sudokuGifSizing = { ...sudokuGifDimensions, fill: false };
    } else {
        conwaysGameOfLifeGifSizing.fill = true;
        sudokuGifSizing.fill = true;
    }

    return (
        <div id="projects" ref={ref} className={styles.container}>
            <h1 className={styles.projectHeader}>PROJECTS</h1>
            <Project
                projectName="Reddit Clone"
                technologies={[
                    "Django",
                    "Django Rest Framework",
                    "React",
                    "Redux",
                    "TypeScript",
                    "AWS",
                ]}
                skills={[
                    "REST API's",
                    "JWT Authentication",
                    "State Management",
                    "Responsive Design",
                    "Relational Databases",
                ]}
                dotpoints={[
                    "Built a reddit clone with Django on backend and React on frontend.",
                    "Deployed using AWS Lambda with an API Gateway. Additionally, it uses S3 for static file storage and an AWS RDS instance for the database.",
                    "Github Actions for CI/CD",
                    "Contains user management (with JWT), posting, commenting, replies to comments (nested comments), post categories, infinite scroll, and responsive design.",
                ]}
                githubLink="https://github.com/Mitch281/django-react-reddit-clone"
                websiteLink="https://threddit.netlify.app"
            />
            <div className={styles.projectContainerWithDemo}>
                <Project
                    projectName="Conway's Game of Life"
                    technologies={["Python", "Pygame"]}
                    skills={["Algorithms", "OOP"]}
                    dotpoints={[
                        "Cloned the famous game, Conway's Game of Life with Python and Pygame.",
                        "Controls to start and stop the game.",
                        "Controls to go back or go forwards one step at a time.",
                        "Drawing mode (by pressing ctrl) where you can draw tiles.",
                    ]}
                    githubLink="https://github.com/Mitch281/Conways-Game-of-Life"
                />
                <div
                    className={`${styles.gifContainer} ${styles.conwaysGameOfLifeGifContainer}`}
                >
                    <Image
                        src="/conways-game-of-life.gif"
                        alt="Conways Game of Life Demo"
                        {...conwaysGameOfLifeGifSizing}
                    />
                </div>
            </div>
            <div className={styles.projectContainerWithDemo}>
                <Project
                    projectName="Sudoku Solver"
                    technologies={["Python", "Pygame"]}
                    skills={["Backtracking Algorithm", "OOP"]}
                    dotpoints={[
                        "Built a Sudoku Clone with a Sudoku solver using the backtracking algorithm.",
                        "Written using python with the Pygame library.",
                    ]}
                    githubLink="https://github.com/Mitch281/Sudoku-Recreation"
                />
                <div
                    className={`${styles.gifContainer} ${styles.sudokuGifContainer}`}
                >
                    <Image
                        src="/sudoku.gif"
                        alt="Sudoku Demo"
                        {...sudokuGifSizing}
                    />
                </div>
            </div>
        </div>
    );
}
