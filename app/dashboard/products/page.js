import Products from "@/components/dashboard/products/Products";

export default function page() {
    const data = [
        {
            title: "Tshirt",
            description: "100% Cotton",
            basePrice: 100000,
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:05:20.484Z",
            updatedAt: "2023-05-23T20:05:20.484Z",
        },
        {
            title: "Tshirt",
            description: "100% Cotton",
            basePrice: 100000,
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:05:20.484Z",
            updatedAt: "2023-05-23T20:05:20.484Z",
        },
        {
            title: "Tshirt",
            description: "100% Cotton",
            basePrice: 100000,
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:05:20.484Z",
            updatedAt: "2023-05-23T20:05:20.484Z",
        },
        {
            title: "Tshirt",
            description: "100% Cotton",
            basePrice: 100000,
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:05:20.484Z",
            updatedAt: "2023-05-23T20:05:20.484Z",
        },
    ];

    return <Products data={data}></Products>;
}
