import Link from "next/link";
import Header from "@/components/Header";
/* eslint-disable react/react-in-jsx-scope */
export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
