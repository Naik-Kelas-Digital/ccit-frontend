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
      <br />
      <Link href="/forgot-password">halaman forgot password</Link>
      <br />
      <Link href="/verifikasi-forgot-pass">halaman verifikasi google</Link>
      <br />
      <Link href="/set-new-password">halaman set new password</Link>
    </>
  );
}
