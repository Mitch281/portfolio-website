import connect from "@/db/connect";

export async function GET() {
    const client = await connect();
    console.log(await client.query("SELECT NOW()"));
    await client.end();
    return Response.json({ message: "abc" });
}
