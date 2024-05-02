import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2 md:py-3 lg:py-4 shadow-sm shadow-[#bbb]">
      <div className="container mx-auto px-4 md:px-5 xl:px-6">
        <Link
          className="text-xl md:text-2xl lg:text-3xl font-light hover:text-[#fff]"
          href="/"
        >
          &lt;DanielXavier /&gt;
        </Link>
      </div>
    </header>
  );
}
