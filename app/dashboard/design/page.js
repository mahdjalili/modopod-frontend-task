import Design from "@/components/dashboard/design/Design";
import Products from "@/components/dashboard/design/Design";

export default function page() {
    const data = [
        {
            title: "Mona Lisa",
            description: "The Mona Lisa is one of the most valuable paintings in the world.",
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:54:33.662Z",
            updatedAt: "2023-05-23T20:54:33.662Z",
        },
        {
            title: "Mona Lisa",
            description: "The Mona Lisa is one of the most valuable paintings in the world.",
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:54:33.662Z",
            updatedAt: "2023-05-23T20:54:33.662Z",
        },
        {
            title: "Mona Lisa",
            description: "The Mona Lisa is one of the most valuable paintings in the world.",
            id: 0,
            userId: 0,
            createdAt: "2023-05-23T20:54:33.662Z",
            updatedAt: "2023-05-23T20:54:33.662Z",
        },
    ];
    return <Design data={data}></Design>;
}
