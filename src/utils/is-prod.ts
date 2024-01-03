export default function isProd() {
    const env = process.env.NODE_ENV;
    if (env === "development") {
        return false;
    }
    return true;
}
