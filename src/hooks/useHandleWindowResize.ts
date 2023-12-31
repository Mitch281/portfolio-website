import { useEffect, useState } from "react";

export default function useHandleWindowResize() {
    const [windowWidth, setWindowWidth] = useState<number>();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
}
