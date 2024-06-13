import { createElement, ReactNode, useState } from "react";

export default function VisibilityControl({
  children,
  className,
  defaultVisible,
  tag = "div",
}: {
  children: ReactNode;
  className?: string;
  defaultVisible?: boolean;
  tag?: keyof HTMLElementTagNameMap;
}) {
  const [visible, setVisible] = useState(defaultVisible ?? true);

  return createElement(
    tag,
    {
      className: `${className ?? ""} flex gap-x-1.5 ${
        !visible ? "opacity-50 line-through print:hidden" : ""
      }`,
      "data-testid": "visibility-control",
    },
    <input
      className="print:hidden"
      type="checkbox"
      checked={visible}
      onChange={() => setVisible(!visible)}
    />,
    children
  );
}
