import styles from "./skill-card.module.css";

type Props = {
    image: React.ReactNode;
    imageDescription: string;
};

export default function SkillCard({ image, imageDescription }: Props) {
    return (
        <>
            {image}
            <hr className={styles.hr} />
            <span>{imageDescription}</span>
        </>
    );
}