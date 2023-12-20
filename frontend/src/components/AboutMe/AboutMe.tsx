import styles from "./about-me.module.css";

export default function AboutMe() {
    return (
        <div id="about-me" className={styles.container}>
            <h1>
                <span>Mitchell</span>{" "}
                <span className={styles.lastName}>Anton</span>
            </h1>
            <h2>Software Developer</h2>
            <p>
                I am an enthusiastic software developer who solving problems
                with programming.{" "}
            </p>
        </div>
    );
}
