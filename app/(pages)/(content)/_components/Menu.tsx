import { Fragment } from "react";

type MenuProps = Readonly<{
  items: string[];
  activeItem: string;
  handleClick: (item: string) => void;
}>;

export default function Menu({ items, activeItem, handleClick }: MenuProps) {
  return (
    <menu
      className="mt-1 md:mt-2 text-sm lg:mt-3 lg:text-base flex gap-x-1"
      data-testid="menu"
    >
      {items.map((item, i) => (
        <Fragment key={i}>
          <li>
            <button
              className={`${
                activeItem === item
                  ? "text-secondary underline cursor-default"
                  : ""
              } hover:text-secondary hover:underline`}
              onClick={() => handleClick(item)}
              disabled={activeItem === item}
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
