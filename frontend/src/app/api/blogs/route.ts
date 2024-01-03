import connect from "@/db/connect";
import { BlogPost } from "@/types";

export async function GET() {
    const client = await connect();
    const blogQuery = await client.query("select * from blogs");
    const blogPosts: BlogPost[] = blogQuery.rows;
    await client.end();
    return Response.json(blogPosts);
}
