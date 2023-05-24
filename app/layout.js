import "@/globals/globals.css";
import "@/globals/bootstrap.css";

import { Vazirmatn } from "next/font/google";
import Provider from "@/context/Provider";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
    title: "Modopod",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body className={vazirmatn.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
