import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Page({ params }: { params: Params }) {
    return <div>This is the blog with id {params.id}</div>;
}
