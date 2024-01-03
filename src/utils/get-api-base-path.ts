import isProd from "./is-prod";

export default function getApiBasePath() {
    if (!isProd()) {
        return process.env.API_URL_BASE_PATH;
    }

    return `https://${process.env.VERCEL_URL}/api`;
}
