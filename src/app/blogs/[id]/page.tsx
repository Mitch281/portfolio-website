import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import FullBlogPost from "@/components/blog/FullBlogPost/FullBlogPost";
import fetchBlogById from "@/db/fetch-blog-by-id";
import { BlogPost } from "@/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function invokeFetchBlogPostById(id: number): Promise<BlogPost> {
    try {
        const blogPost = await fetchBlogById(id);
        return blogPost;
    } catch (error) {
        throw new Error("Could not fetch blog post.");
    }
}

export default async function Page({ params }: { params: Params }) {
    const blogPost = await invokeFetchBlogPostById(params.id);
    return (
        <ScreenLayout>
            <PageLayout>
                <FullBlogPost blogPost={blogPost} />
            </PageLayout>
        </ScreenLayout>
    );
}
