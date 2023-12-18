import Image from "next/image";
import imageOfMe from "../../../../public/image-of-me.png";
import styles from "./avatar.module.css";

export default function Avatar() {
    return (
        <div className={styles.imageContainer}>
            <Image className={styles.image} src={imageOfMe} alt="Image of me" />
        </div>
    );
}
