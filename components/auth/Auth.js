"use client";

import styles from "./auth.module.css";
import { useState } from "react";
import { Button, Tab, Tabs, FormControl, OutlinedInput, InputLabel } from "@mui/material";

function Login() {
    const handleLogin = () => {};

    return (
        <form className={styles.form}>
            <FormControl fullWidth>
                <InputLabel htmlFor="fname">نام</InputLabel>
                <OutlinedInput id="fname" label="نام" />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="lname">نام خانوادگی</InputLabel>
                <OutlinedInput id="lname" label="نام خانوادگی" />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="email">ایمیل</InputLabel>
                <OutlinedInput id="email" label="ایمیل" />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="password">رمز عبور</InputLabel>
                <OutlinedInput type="password" id="password" label="رمز عبور" />
            </FormControl>

            <div>
                <Button variant="contained">ورود</Button>
            </div>
        </form>
    );
}

function SignUp() {
    const handleSignUp = () => {};

    return (
        <form className={styles.form}>
            <FormControl fullWidth>
                <InputLabel htmlFor="fname">نام</InputLabel>
                <OutlinedInput id="fname" label="نام" />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="lname">نام خانوادگی</InputLabel>
                <OutlinedInput id="lname" label="نام خانوادگی" />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="email">ایمیل</InputLabel>
                <OutlinedInput id="email" label="ایمیل" />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="password">رمز عبور</InputLabel>
                <OutlinedInput type="password" id="password" label="رمز عبور" />
            </FormControl>

            <div>
                <Button variant="contained">ثبت نام</Button>
            </div>
        </form>
    );
}

export default function Auth() {
    const [value, setValue] = useState(1);

    const handleTabsChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.auth_wrapper} widget`}>
                <div className={styles.tabs}>
                    <Tabs value={value} onChange={handleTabsChange}>
                        <Tab label="ثبت نام" />
                        <Tab label="ورود" />
                    </Tabs>
                </div>
                <div>{value === 0 ? <SignUp /> : <Login />}</div>
            </div>
        </div>
    );
}
