"use client";

import styles from "./dashboard.module.css";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export default function Dashboard({ children }) {
    const path = usePathname();

    const menus = [
        {
            text: "داشبورد",
            path: "/dashboard",
        },
        {
            text: "مرچندايز",
            path: "/dashboard/merchandise",
        },
        {
            text: "دیزاین",
            path: "/dashboard/design",
        },
        {
            text: "محصولات",
            path: "/dashboard/products",
        },
    ];

    return (
        <main className={styles.main}>
            <header className={`${styles.header} widget_no_shadow`}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <img src="https://modopod.ir/wp-content/uploads/2023/01/Asset-8-1@2x.png" alt="#"></img>
                    </div>
                    <div className={styles.avatar}>
                        <span>مهدی جلیلی</span>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                    </div>
                </nav>
            </header>
            <article className={styles.article}>
                <aside className={`${styles.sidebar} widget_no_shadow`}>
                    {menus.map((menu) => (
                        <>
                            <Link href={menu.path}>
                                <Button variant={menu.path == path ? "contained" : "text"} fullWidth>
                                    {menu.text}
                                </Button>
                            </Link>
                        </>
                    ))}
                </aside>
                <section className={styles.section}>{children}</section>
            </article>
        </main>
    );
}
