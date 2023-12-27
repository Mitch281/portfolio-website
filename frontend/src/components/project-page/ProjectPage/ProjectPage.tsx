"use client";

import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import Image from "next/image";
import Project from "../Project/Project";
import styles from "./project-page.module.css";

export default function ProjectPage() {
    const { ref } = useSetNavbarLinkInFocus("Projects");
    return (
        <div id="projects" ref={ref} className={styles.container}>
            <h1>Projects</h1>
            <div className={styles.projectListContainer}>
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
                            fill
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
                        <Image src="/sudoku.gif" alt="Sudoku Demo" fill />
                    </div>
                </div>
            </div>
        </div>
    );
}
