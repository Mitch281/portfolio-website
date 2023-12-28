import { BlogPost } from "@/types";

type Props = {
    blogPosts: BlogPost[];
};

export default function AllBlogPostsContainer({ blogPosts }: Props) {
    return (
        <div>
            {blogPosts.map((blogpost) => (
                <h1 key={blogpost.id}>{blogpost.title}</h1>
            ))}
        </div>
    );
}
