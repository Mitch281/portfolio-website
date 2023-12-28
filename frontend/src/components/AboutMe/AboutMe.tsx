"use client";

import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import styles from "./about-me.module.css";

export default function AboutMe() {
    const { ref } = useSetNavbarLinkInFocus("About Me");
    return (
        <div id="about-me" className={styles.container} ref={ref}>
            <h1>
                <span>Mitchell</span>{" "}
                <span className={styles.lastName}>Anton</span>
            </h1>
            <h2 className={styles.jobTitle}>Software Developer</h2>
            <h3>
                Melbourne, Australia -{" "}
                <Link
                    className={styles.emailLink}
                    href="mailto:mitchella0100@gmail.com"
                >
                    mitchella0100@gmail.com
                </Link>
            </h3>
            <p className={styles.aboutMeText}>
                Hi there &#128075;. I am a software developer from Melbourne,
                Australia. My main area of interest lies in web development,
                where you'll find me building applications with React and
                Django.
            </p>
            <div className={styles.socialsContainer}>
                <Link
                    href="https://www.linkedin.com/in/mitchell-anton-824703216/"
                    className={styles.socialMediaIconLink}
                >
                    <FaLinkedin className={styles.socialMediaIcon} />
                </Link>
                <Link
                    href="https://github.com/Mitch281"
                    className={styles.socialMediaIconLink}
                >
                    <FaGithub className={styles.socialMediaIcon} />
                </Link>
                <Link
                    href="mailto:mitchella0100@gmail.com"
                    className={styles.socialMediaIconLink}
                >
                    <AiOutlineMail className={styles.socialMediaIcon} />
                </Link>
            </div>
        </div>
    );
}
