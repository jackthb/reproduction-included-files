import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Image
        src="/images/duster.jpg"
        alt="Next.js logo"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold text-center">This image should still be visible when deployed.</h1>
    </main>
  );
}
