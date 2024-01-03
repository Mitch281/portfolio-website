import isProd from "@/utils/is-prod";
import { Client } from "pg";

async function connect() {
    let client: Client | null = null;
    if (isProd()) {
        client = new Client({
            connectionString: process.env.POSTGRES_URL + "?sslmode=require",
        });
    } else {
        client = new Client({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
        });
    }

    await client.connect();

    return client;
}

export default connect;
