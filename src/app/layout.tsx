import { NavbarContextProvider } from "@/context/NavbarContext";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--fira-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Mitchell Anton | Software Developer",
    description: "Mitchell Anton's portfolio website.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={firaSans.className}>
                <NavbarContextProvider>{children}</NavbarContextProvider>
            </body>
        </html>
    );
}
