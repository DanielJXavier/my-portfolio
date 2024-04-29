import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 border-white border-solid border-b">
      <div className="container mx-auto">
        <Link className="text-2xl antialiased font-light" href="/">
          &lt;DanielXavier /&gt;
        </Link>
      </div>
    </header>
  );
}
