import { BlogPost } from "@/types";
import isProd from "@/utils/is-prod";
import { sql } from "@vercel/postgres";
import connect from "./connect";

export default async function fetchAllBlogs() {
    let query;
    if (isProd()) {
        query = await sql`select * from blogs`;
    } else {
        const pool = await connect();
        query = await pool.query("select * from blogs");
        await pool.end();
    }
    const blogPosts: BlogPost[] = query.rows;
    return blogPosts;
}
