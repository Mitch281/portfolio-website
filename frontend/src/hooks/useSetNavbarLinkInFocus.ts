import { NavbarContext } from "@/context/NavbarContext";
import { LinkInFocusOnNavbar } from "@/types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useSetNavbarLinkInFocus(pageName: LinkInFocusOnNavbar) {
    const { ref, inView } = useInView();
    const { setLinkInFocusOnNavbar } = useContext(NavbarContext);

    useEffect(() => {
        if (inView) {
            setLinkInFocusOnNavbar(pageName);
        }
    }, [inView]);

    return { ref, inView };
}
