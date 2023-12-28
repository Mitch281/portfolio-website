import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import AllBlogPostsContainer from "@/components/blog/AllBlogPostsContainer/AllBlogPostsContainer";
import { BlogPost } from "@/types";

const API_BASE_PATH = process.env.API_BASE_PATH;

async function fetchAllBlogPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_PATH}/blogs`);
    if (!response.ok) {
        console.log(response.statusText);
        throw new Error(response.statusText);
    }
    const json: BlogPost[] = await response.json();
    return json;
}

export default async function Page() {
    const allBlogs = await fetchAllBlogPosts();

    return (
        <ScreenLayout>
            <PageLayout>
                <AllBlogPostsContainer blogPosts={allBlogs} />
            </PageLayout>
        </ScreenLayout>
    );
}
