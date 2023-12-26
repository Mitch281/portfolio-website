"use client";

import { NavbarContextType, NavbarLink } from "@/types";
import { createContext, useEffect, useState } from "react";

const NavbarContext = createContext<NavbarContextType>({
    pagesInView: ["About Me"],
    setPagesInView: () => {},
    pageHighlightedOnNavbar: "About Me",
});

const NAVBAR_ORDERING = {
    "About Me": 1,
    Skills: 2,
    Projects: 3,
};

function NavbarContextProvider({ children }: { children: React.ReactNode }) {
    const [pagesInView, setPagesInView] = useState<NavbarLink[]>(["About Me"]);
    const [pageHighlightedOnNavbar, setPageHighlightedOnNavbar] =
        useState<NavbarLink>("About Me");

    useEffect(() => {
        let currentOrder: number | null = null;
        let newPageHighlightedOnNavbar: NavbarLink | null = null;
        pagesInView.forEach((pageInView) => {
            const order = NAVBAR_ORDERING[pageInView];
            if (!currentOrder || order < currentOrder) {
                currentOrder = order;
                newPageHighlightedOnNavbar = pageInView;
            }
        });
        if (!newPageHighlightedOnNavbar) {
            return;
        }
        setPageHighlightedOnNavbar(newPageHighlightedOnNavbar);
    }, [pagesInView]);

    return (
        <NavbarContext.Provider
            value={{
                pagesInView,
                setPagesInView,
                pageHighlightedOnNavbar,
            }}
        >
            {children}
        </NavbarContext.Provider>
    );
}

export { NavbarContext, NavbarContextProvider };
