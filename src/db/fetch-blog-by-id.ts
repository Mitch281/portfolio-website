import { BlogPost } from "@/types";
import isProd from "@/utils/is-prod";
import { sql } from "@vercel/postgres";
import connect from "./connect";

export default async function fetchBlogById(blogId: number) {
    let query;
    if (isProd()) {
        query = await sql`select * from Blogs where id = ${blogId}`;
    } else {
        const pool = await connect();
        query = await pool.query(`select * from Blogs where id = ${blogId}`);
        await pool.end();
    }

    const blogPost: BlogPost = query.rows[0];
    return blogPost;
}
