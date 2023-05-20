"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function MUIThemeProvider({ children }) {
    const theme = createTheme({
        direction: "rtl",
        typography: {
            fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(","),
        },
        // palette: {
        //     primary: {
        //         main: "#000",
        //     },
        //     secondary: {
        //         main: "#11cb5f",
        //     },
        // },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
