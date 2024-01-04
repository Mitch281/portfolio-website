import { BlogPost } from "@/types";
import isProd from "@/utils/is-prod";
import { sql } from "@vercel/postgres";
import connect from "./connect";

export default async function fetchBlogById(blogId: number) {
    let query;
    if (isProd()) {
        query = await sql`select * from Blogs where id = ${blogId}`;
    } else {
        const client = await connect();
        query = await client.query(`select * from Blogs where id = ${blogId}`);
        await client.end();
    }

    const blogPost: BlogPost = query.rows[0];
    return blogPost;
}
