import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import AllBlogPostsContainer from "@/components/blog/AllBlogPostsContainer/AllBlogPostsContainer";
import { BlogPost } from "@/types";
import getApiBasePath from "@/utils/get-api-base-path";

const API_BASE_PATH = getApiBasePath();

async function fetchAllBlogPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_PATH}/blogs`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json: BlogPost[] = await response.json();
    return json;
}

export default async function Page() {
    let allBlogs: BlogPost[] = [];
    try {
        allBlogs = await fetchAllBlogPosts();
    } catch (error) {
        return <></>;
    }

    return (
        <ScreenLayout>
            <PageLayout>
                <AllBlogPostsContainer blogPosts={allBlogs} />
            </PageLayout>
        </ScreenLayout>
    );
}