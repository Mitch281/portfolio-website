import isProd from "@/utils/is-prod";
import { Pool } from "pg";

async function connect() {
    let pool: Pool | null = null;
    if (isProd()) {
        pool = new Pool({
            connectionString: process.env.POSTGRES_URL + "?sslmode=require",
        });
    } else {
        pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
        });
    }

    await pool.connect();

    return pool;
}

export default connect;
