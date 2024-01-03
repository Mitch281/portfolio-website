"use client";

import ErrorPage from "@/components/ErrorPage/ErrorPage";
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
                <ErrorPage errorMessage={error.message} reset={reset} />
            </PageLayout>
        </ScreenLayout>
    );
};
export default error;
