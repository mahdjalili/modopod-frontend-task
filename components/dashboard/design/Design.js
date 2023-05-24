"use client";

import styles from "./design.module.css";
import { Card, CardActions, CardContent, Button } from "@mui/material";

export default function Design({ data }) {
    return (
        <div className="row">
            {data.map((product) => (
                <div key={product.id} className={`${styles.card} col-4`}>
                    <Card key={product.id}>
                        <CardContent>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>{product.userId}</p>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained">ويرايش</Button>
                            <Button variant="contained" color="error">
                                حذف كردن
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}
