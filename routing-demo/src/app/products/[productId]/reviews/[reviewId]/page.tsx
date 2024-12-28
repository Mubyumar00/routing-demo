"use client";
import { notFound } from "next/navigation";
type PageProps = {
    params: {
        productId: string;
        reviewId: string;
    };
};

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }: PageProps) {
    try {
        // const random = getRandomInt(2);

        // if (random === 1) {
        //     // throw new Error("Error loading review");
        //     console.log()
        // }

        if (parseInt(params?.reviewId) > 1000) {
            notFound();
        }

        return (
            <h1>
                Review {params?.reviewId} for product {params?.productId}
            </h1>
        );
    } catch (error) {
        console.error(error);
        return <p>There was an error loading the review. Please try again later.</p>;
    }
}
