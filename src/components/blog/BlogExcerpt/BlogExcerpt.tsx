import { BlogPost } from "@/types";
import Link from "next/link";
import Markdown from "react-markdown";
import styles from "./blog-excerpt.module.css";

type Props = {
    blogPost: BlogPost;
};

export default function BlogExcerpt({ blogPost }: Props) {
    const blogPostPreview = blogPost.article.slice(0, 200);
    return (
        <div>
            <p>
                <Link
                    className={styles.blogPostTitle}
                    href={`/blogs/${blogPost.id}`}
                >
                    {blogPost.title}
                </Link>
            </p>
            <span className={styles.dateCreatedText}>
                Date Created: {blogPost.date_created.slice(0, 10)}
            </span>
            <Markdown className={styles.article}>{blogPostPreview}</Markdown>
            <Link className={styles.keepReading} href={`blogs/${blogPost.id}`}>
                Keep Reading
            </Link>
        </div>
    );
}
