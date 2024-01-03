import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import AllBlogPostsContainer from "@/components/blog/AllBlogPostsContainer/AllBlogPostsContainer";
import { BlogPost } from "@/types";
import getApiBasePath from "@/utils/get-api-base-path";

const API_BASE_PATH = getApiBasePath();
let error: any = null;

async function fetchAllBlogPosts(): Promise<BlogPost[]> {
    try {
        const allBlogPosts = await fetchAllBlogPosts();
        return allBlogPosts;
    } catch (error) {
        throw new Error("Could not fetch blog posts.");
    }
}

export default async function Page() {
    const allBlogs = await fetchAllBlogPosts();

    return (
        <ScreenLayout>
            <PageLayout>
                <AllBlogPostsContainer blogPosts={allBlogs} error={error} />
            </PageLayout>
        </ScreenLayout>
    );
}
