import "@/globals/globals.css";

import { Vazirmatn } from "next/font/google";
import MUIThemeProvider from "@/context/MUIThemeProvider";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
    title: "Modopod",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body className={vazirmatn.className}>
                <MUIThemeProvider>{children}</MUIThemeProvider>
            </body>
        </html>
    );
}
