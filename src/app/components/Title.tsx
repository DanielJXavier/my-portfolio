export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 xl:mb-8">
      {children}
    </h1>
  );
}
