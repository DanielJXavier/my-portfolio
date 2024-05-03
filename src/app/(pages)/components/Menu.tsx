import { Dispatch, SetStateAction } from "react";

type MenuProps = Readonly<{
  items: string[];
  activeItem: string;
  setActiveItem: Dispatch<SetStateAction<string>>;
}>;

export default function Menu({ items, activeItem, setActiveItem }: MenuProps) {
  return (
    <menu className="text-sm lg:text-base flex gap-x-1">
      {items.map((item, i) => (
        <>
          <li key={i}>
            <button
              className={`${
                activeItem === item ? "text-[#fff] underline" : ""
              } hover:text-[#fff] hover:underline`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          </li>
          {items.length - 1 > i && <li>|</li>}
        </>
      ))}
    </menu>
  );
}
