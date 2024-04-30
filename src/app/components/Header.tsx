import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 shadow-sm shadow-[#bbb]">
      <div className="container mx-auto">
        <Link
          className="text-2xl font-light hover:text-[#fff] hover:font-normal"
          href="/"
        >
          &lt;DanielXavier /&gt;
        </Link>
      </div>
    </header>
  );
}
