"use client";

import styles from "./products.module.css";
import { Card, CardActions, CardContent, Button } from "@mui/material";

export default function Products({ data }) {
    return (
        <div className="row">
            {data.map((product) => (
                <div key={product.id} className={`${styles.card} col-4`}>
                    <Card key={product.id}>
                        <CardContent>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>
                                <span>قيمت پايه: </span>
                                {product.basePrice}
                            </p>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small">
                                ساخت مرچند
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}
