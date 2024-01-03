import connect from "@/db/connect";
import { BlogPost } from "@/types";

export async function GET() {
    const pool = await connect();
    const blogQuery = await pool.query("select * from blogs");
    const blogPosts: BlogPost[] = blogQuery.rows;
    await pool.end();
    return Response.json(blogPosts);
}
