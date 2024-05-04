import { Dispatch, Fragment, SetStateAction } from "react";

type MenuProps = Readonly<{
  items: string[];
  activeItem: string;
  setActiveItem: Dispatch<SetStateAction<string>>;
}>;

export default function Menu({ items, activeItem, setActiveItem }: MenuProps) {
  return (
    <menu className="mt-1 md:mt-2 text-sm lg:mt-3 lg:text-base flex gap-x-1">
      {items.map((item, i) => (
        <Fragment key={i}>
          <li>
            <button
              className={`${
                activeItem === item
                  ? "text-[#fff] underline cursor-default"
                  : ""
              } hover:text-[#fff] hover:underline`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          </li>
          {items.length - 1 > i && <li>|</li>}
        </Fragment>
      ))}
    </menu>
  );
}
