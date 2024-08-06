import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <br />
      <Link  href="/AboutUs">About Us</Link>  
      <br/>
      <Link href="/Contact">CONTACT US</Link>
    </>
  );
}
