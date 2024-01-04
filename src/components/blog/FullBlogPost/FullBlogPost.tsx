import { BlogPost } from "@/types";
import Link from "next/link";
import Markdown from "react-markdown";
import styles from "./full-blog-post.module.css";

type Props = {
    blogPost: BlogPost;
};

export default function FullBlogPost({ blogPost }: Props) {
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
                Date Created: {blogPost.date_created.toString().slice(0, 10)}
            </span>
            <Markdown className={styles.article}>{blogPost.article}</Markdown>
            <Link className={styles.backToBlogLink} href="/blogs">
                Back to blog
            </Link>
        </div>
    );
}
