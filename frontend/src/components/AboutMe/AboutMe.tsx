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
            <p>
                I am an enthusiastic software developer who solving problems
                with programming.{" "}
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
