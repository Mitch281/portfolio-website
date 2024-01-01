import { BlogPost } from "@/types";
import BlogExcerpt from "../BlogExcerpt/BlogExcerpt";
import styles from "./all-blog-posts-container.module.css";

type Props = {
    blogPosts: BlogPost[];
};

export default function AllBlogPostsContainer({ blogPosts }: Props) {
    let blogPostsElements: React.ReactNode = <></>;
    if (blogPosts.length === 0) {
        blogPostsElements = (
            <div>
                <h1>Coming soon!</h1>
            </div>
        );
    } else {
        blogPostsElements = blogPosts.map((blogPost) => (
            <BlogExcerpt key={blogPost.id} blogPost={blogPost} />
        ));
    }
    return (
        <div className={styles.allBlogPostsContainer}>{blogPostsElements}</div>
    );
}
