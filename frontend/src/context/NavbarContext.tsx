"use client";

import { LinkInFocusOnNavbar, LinkInFocusOnNavbarContext } from "@/types";
import { createContext, useState } from "react";

const NavbarContext = createContext<LinkInFocusOnNavbarContext>({
    linkInFocusOnNavbar: "About Me",
    setLinkInFocusOnNavbar: () => {},
});

function NavbarContextProvider({ children }: { children: React.ReactNode }) {
    const [linkInFocusOnNavbar, setLinkInFocusOnNavbar] =
        useState<LinkInFocusOnNavbar>("About Me");
    return (
        <NavbarContext.Provider
            value={{ linkInFocusOnNavbar, setLinkInFocusOnNavbar }}
        >
            {children}
        </NavbarContext.Provider>
    );
}

export { NavbarContext, NavbarContextProvider };
