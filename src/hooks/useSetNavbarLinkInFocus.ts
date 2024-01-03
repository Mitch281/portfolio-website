import { NavbarContext } from "@/context/NavbarContext";
import { NavbarLink } from "@/types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useSetNavbarLinkInFocus(pageName: NavbarLink) {
    const { ref, inView } = useInView();
    const { pagesInView, setPagesInView } = useContext(NavbarContext);

    useEffect(() => {
        console.log("made it");
        if (inView) {
            if (!pagesInView.includes(pageName)) {
                setPagesInView((pagesInView) => [...pagesInView, pageName]);
            }
        } else {
            if (pagesInView.includes(pageName)) {
                setPagesInView((pagesInView) =>
                    pagesInView.filter((page) => page !== pageName)
                );
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return { ref, inView };
}
