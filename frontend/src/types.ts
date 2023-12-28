import { SetStateAction } from "react";

export type NavbarLink = "About Me" | "Skills" | "Projects" | "Blog";

export type NavbarContextType = {
    pagesInView: NavbarLink[];
    setPagesInView: React.Dispatch<SetStateAction<NavbarLink[]>>;
    pageHighlightedOnNavbar: NavbarLink;
};

export type BlogPost = {
    id: number;
    title: string;
    article: string;
    date_created: string;
    date_updated: string;
};
