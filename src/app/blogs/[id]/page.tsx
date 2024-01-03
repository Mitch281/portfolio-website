import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import FullBlogPost from "@/components/blog/FullBlogPost/FullBlogPost";
import { BlogPost } from "@/types";
import getApiBasePath from "@/utils/get-api-base-path";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const API_BASE_PATH = getApiBasePath();

async function fetchBlogPostById(id: number): Promise<BlogPost> {
    try {
        const blogPost = await fetchBlogPostById(id);
        return blogPost;
    } catch (error) {
        throw new Error("Could not fetch blog post.");
    }
}

export default async function Page({ params }: { params: Params }) {
    const blogPost = await fetchBlogPostById(params.id);
    return (
        <ScreenLayout>
            <PageLayout>
                <FullBlogPost blogPost={blogPost} />
            </PageLayout>
        </ScreenLayout>
    );
}
