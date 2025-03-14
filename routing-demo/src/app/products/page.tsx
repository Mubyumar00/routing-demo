import Link from "next/link";

export default function ProductList() {
    const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="/product1">Product 1</Link>
      </h2>
      <h2>
        <Link href="product2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/product3" replace>Product 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
