export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto px-4 md:px-5 xl:px-6 pt-6 md:pt-8 xl:pt-12">
      {children}
    </main>
  );
}
