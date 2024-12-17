import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    try {
        // Simulate asynchronous operation to fetch the title
        const title = await new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`iPhone ${params.productId}`);
            }, 100);
        });

        // Return metadata
        return {
            title: `Product ${title}`,
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        // Provide fallback metadata
        return {
            title: "Product Information Unavailable",
        };
    }
};



export default function ProductDetails( { params }: Props ) {
    return <h1>Details about product {params.productId}</h1>;
}
