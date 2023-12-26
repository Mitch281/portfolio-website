import { SetStateAction } from "react";

export type NavbarLink = "About Me" | "Skills" | "Projects";

export type NavbarContextType = {
    pagesInView: NavbarLink[];
    setPagesInView: React.Dispatch<SetStateAction<NavbarLink[]>>;
    pageHighlightedOnNavbar: NavbarLink;
};
