import { SetStateAction } from "react";

export type LinkInFocusOnNavbar = "About Me" | "Skills" | "Projects";

export type LinkInFocusOnNavbarContext = {
    linkInFocusOnNavbar: LinkInFocusOnNavbar;
    setLinkInFocusOnNavbar: React.Dispatch<SetStateAction<LinkInFocusOnNavbar>>;
};
