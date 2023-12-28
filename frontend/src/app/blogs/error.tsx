"use client";

import PageLayout from "@/components/PageLayout/PageLayout";
import ScreenLayout from "@/components/ScreenLayout/ScreenLayout";

type Props = {
    error: Error;
    reset: () => void;
};

const error = ({ error, reset }: Props) => {
    return (
        <ScreenLayout>
            <PageLayout>
                <h2>{error.message}</h2>
                <button onClick={() => reset()}>Try again</button>
            </PageLayout>
        </ScreenLayout>
    );
};
export default error;
