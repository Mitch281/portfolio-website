import useSetNavbarLinkInFocus from "@/hooks/useSetNavbarLinkInFocus";
import Link from "next/link";
import styles from "./blog-page-preview.module.css";

export default function BlogPagePreview() {
    const { ref } = useSetNavbarLinkInFocus("Blog");
    return (
        <div ref={ref} className={styles.container}>
            <Link className={styles.goToBlogsLink} href="/blogs">
                Go to Blogs
            </Link>
        </div>
    );
}
