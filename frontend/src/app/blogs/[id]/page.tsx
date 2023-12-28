import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";
import FullBlogPost from "@/components/blog/FullBlogPost/FullBlogPost";
import { BlogPost } from "@/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const API_BASE_PATH = process.env.API_BASE_PATH;

export async function fetchBlogPostById(id: number): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_PATH}/blogs/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const json: BlogPost = await response.json();
    return json;
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
