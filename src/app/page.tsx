import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs List</Link>
        </li>
        <li>
          <Link href="/blogs/1">Blog Detail (ID: 1)</Link>
        </li>
        <li>
          <Link href="/products">Products List</Link>
        </li>
        <li>
          <Link href="/products/1">Product Detail (ID: 1)</Link>
        </li>
        <li>
          <Link href="/products/1/reviews/5">
            Product Review (Product ID: 1, Review ID: 5)
          </Link>
        </li>
      </ul>
    </div>
  );
}