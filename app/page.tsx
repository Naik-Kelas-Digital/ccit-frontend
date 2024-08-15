import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <br />
      <Link  href="/about-us">About Us</Link>  
      <br/>
      <Link href="/contact">Contact</Link>
      <br />
      <Link href="/sign-up">halaman Sign Up</Link>
      <br />
      <Link href="/login">halaman login</Link>
    </>
  );
}
