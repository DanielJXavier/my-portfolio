type ResposibilitiesProps = Readonly<{
  items: string[];
}>;

export default function Resposibilities({ items }: ResposibilitiesProps) {
  return (
    <section className="mt-4 pl-14 xl:px-14">
      <h3 className="font-semibold xl:text-xl">
        My main responsibilities were:
      </h3>
      <ul className="pl-7 list-disc text-sm xl:text-base">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
