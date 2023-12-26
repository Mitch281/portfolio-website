import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiLinkBold } from "react-icons/pi";
import styles from "./project.module.css";

type Props = {
    projectName: string;
    technologies: string[];
    skills: string[];
    dotpoints: string[];
    githubLink: string;
    websiteLink?: string;
};

export default function Project({
    projectName,
    technologies,
    skills,
    dotpoints,
    githubLink,
    websiteLink,
}: Props) {
    const technologiesString = technologies.join(", ");
    const skillsString = skills.join(", ");

    let websiteLinkElement = <></>;
    if (websiteLink) {
        websiteLinkElement = (
            <Link
                href={websiteLink as string}
                className={styles.socialMediaIconLink}
            >
                <PiLinkBold className={styles.socialMediaIcon} />
            </Link>
        );
    }

    return (
        <div className={styles.container}>
            <h2>{projectName}</h2>
            <h3 className={styles.h3}>Technologies: {technologiesString}</h3>
            <h3 className={styles.h3}>Skills: {skillsString}</h3>
            <ul>
                {dotpoints.map((dotpoint, index) => (
                    <li key={index}>{dotpoint}</li>
                ))}
            </ul>
            <div className={styles.linksContainer}>
                <Link href={githubLink} className={styles.socialMediaIconLink}>
                    <FaGithub className={styles.socialMediaIcon} />
                </Link>
                {websiteLinkElement}
            </div>
        </div>
    );
}
