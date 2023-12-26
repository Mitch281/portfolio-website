import styles from "./skill-card.module.css";

type Props = {
    image: React.ReactNode;
};

export default function SkillCard({ image }: Props) {
    return <div className={styles.imageContainer}>{image}</div>;
}
