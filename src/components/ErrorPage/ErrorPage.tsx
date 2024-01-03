import styles from "./error-page.module.css";

type Props = {
    errorMessage: string;
    reset: () => void;
};

export default function ErrorPage({ errorMessage, reset }: Props) {
    return (
        <div className={styles.container}>
            <span>
                {errorMessage} |{" "}
                <button
                    className={styles.tryAgainButton}
                    type="button"
                    onClick={reset}
                >
                    Try Again
                </button>
            </span>
        </div>
    );
}
