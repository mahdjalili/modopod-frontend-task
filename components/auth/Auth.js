"use client";

import styles from "./auth.module.css";
import { useState } from "react";

import axios from "axios";
import { useFormik } from "formik";
import { Button, Tab, Tabs, FormControl, OutlinedInput, InputLabel } from "@mui/material";

function Login() {
    const handleLogin = (values) => {
        axios.post("/auth/login", {
            email: values.email,
            firstName: values.fname,
            lastName: values.lname,
            password: values.password,
        });
    };

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            handleLogin(values);
        },
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
                <InputLabel htmlFor="fname">نام</InputLabel>
                <OutlinedInput id="fname" label="نام" onChange={formik.handleChange} value={formik.values.fname} />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="lname">نام خانوادگی</InputLabel>
                <OutlinedInput
                    id="lname"
                    label="نام خانوادگی"
                    onChange={formik.handleChange}
                    value={formik.values.lname}
                />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="email">ایمیل</InputLabel>
                <OutlinedInput id="email" label="ایمیل" onChange={formik.handleChange} value={formik.values.email} />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="password">رمز عبور</InputLabel>
                <OutlinedInput
                    type="password"
                    id="password"
                    label="رمز عبور"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </FormControl>

            <div>
                <Button type="submit" variant="contained" onClick={handleLogin}>
                    ورود
                </Button>
            </div>
        </form>
    );
}

function SignUp() {
    const handleSignUp = (values) => {
        axios.post("/auth/signup", {
            email: values.email,
            firstName: values.fname,
            lastName: values.lname,
            password: values.password,
        });
    };

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            handleSignUp(values);
        },
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
                <InputLabel htmlFor="fname">نام</InputLabel>
                <OutlinedInput id="fname" label="نام" onChange={formik.handleChange} value={formik.values.fname} />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="lname">نام خانوادگی</InputLabel>
                <OutlinedInput
                    id="lname"
                    label="نام خانوادگی"
                    onChange={formik.handleChange}
                    value={formik.values.lname}
                />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="email">ایمیل</InputLabel>
                <OutlinedInput id="email" label="ایمیل" onChange={formik.handleChange} value={formik.values.email} />
            </FormControl>

            <FormControl dir="ltr" fullWidth>
                <InputLabel htmlFor="password">رمز عبور</InputLabel>
                <OutlinedInput
                    type="password"
                    id="password"
                    label="رمز عبور"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </FormControl>

            <div>
                <Button type="submit" variant="contained" onClick={handleSignUp}>
                    ثبت نام
                </Button>
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
