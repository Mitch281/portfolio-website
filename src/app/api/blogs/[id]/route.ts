import connect from "@/db/connect";
import { BlogPost } from "@/types";
import isProd from "@/utils/is-prod";
import { sql } from "@vercel/postgres";

type Context = {
    params: { id: number };
};

export async function GET(request: Request, context: Context) {
    const blogId = context.params.id;
    let query;
    if (isProd()) {
        query = await sql`select * from Blogs where id = ${blogId}`;
    } else {
        const pool = await connect();
        query = await pool.query(`select * from Blogs where id = ${blogId}`);
        await pool.end();
    }
    const blogPosts: BlogPost[] = query.rows;
    if (blogPosts.length === 0) {
        return Response.json({ status: 404 });
    }
    return Response.json(blogPosts[0]);
}
