import { Fragment } from "react";

type MenuProps = Readonly<{
  items: {
    text: string;
    value: string;
  }[];
  activeItem: string;
  handleClick: (item: string) => void;
}>;

export default function Menu({ items, activeItem, handleClick }: MenuProps) {
  return (
    <menu
      className="mt-1 md:mt-2 text-sm lg:mt-3 lg:text-base flex gap-x-1"
      data-testid="menu"
    >
      {items.map(({ text, value }, i) => (
        <Fragment key={i}>
          <li>
            <button
              className={`${
                activeItem === value
                  ? "text-secondary underline cursor-default"
                  : ""
              } hover:text-secondary hover:underline`}
              onClick={() => handleClick(value)}
              disabled={activeItem === value}
            >
              {text}
            </button>
          </li>
          {items.length - 1 > i && <li>|</li>}
        </Fragment>
      ))}
    </menu>
  );
}
