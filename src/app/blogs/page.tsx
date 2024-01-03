import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import AllBlogPostsContainer from "@/components/blog/AllBlogPostsContainer/AllBlogPostsContainer";
import fetchAllBlogs from "@/db/fetch-all-blogs";
import { BlogPost } from "@/types";

async function invokeFetchAllBlogPosts(): Promise<BlogPost[]> {
    try {
        const allBlogPosts = await fetchAllBlogs();
        return allBlogPosts;
    } catch (error) {
        throw new Error("Could not fetch blog posts.");
    }
}

export default async function Page() {
    const allBlogs = await invokeFetchAllBlogPosts();

    return (
        <ScreenLayout>
            <PageLayout>
                <AllBlogPostsContainer blogPosts={allBlogs} error={error} />
            </PageLayout>
        </ScreenLayout>
    );
}
