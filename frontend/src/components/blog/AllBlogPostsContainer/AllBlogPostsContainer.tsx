import { BlogPost } from "@/types";
import BlogExcerpt from "../BlogExcerpt/BlogExcerpt";
import styles from "./all-blog-posts-container.module.css";

type Props = {
    blogPosts: BlogPost[];
};

export default function AllBlogPostsContainer({ blogPosts }: Props) {
    return (
        <div className={styles.allBlogPostsContainer}>
            {blogPosts.map((blogPost) => (
                <BlogExcerpt key={blogPost.id} blogPost={blogPost} />
            ))}
        </div>
    );
}
