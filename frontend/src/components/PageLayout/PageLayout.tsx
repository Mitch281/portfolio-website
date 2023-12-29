import styles from "./page-layout.module.css";

type Props = {
    children: React.ReactNode;
    extraClasses?: string[];
};

export default function PageLayout({ children, extraClasses }: Props) {
    console.log(extraClasses);
    let classes = styles.page;
    if (extraClasses) {
        const extraClassesString = extraClasses.join(", ");
        classes += ` ${extraClassesString}`;
    }
    return <div className={classes}>{children}</div>;
}
