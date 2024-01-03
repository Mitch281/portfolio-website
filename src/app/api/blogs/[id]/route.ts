import connect from "@/db/connect";
import { BlogPost } from "@/types";

type Context = {
    params: { id: number };
};

export async function GET(request: Request, context: Context) {
    const blogId = context.params.id;
    const pool = await connect();
    const blogQuery = await pool.query(
        `select * from Blogs where id = ${blogId}`
    );
    const blogPosts: BlogPost[] = blogQuery.rows;
    if (blogPosts.length === 0) {
        return Response.json({ status: 404 });
    }
    await pool.end();
    return Response.json(blogPosts[0]);
}
