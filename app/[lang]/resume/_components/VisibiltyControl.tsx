import { createElement, ReactNode, useState } from "react";

type VisibilityControlProps = {
  className: string;
  "data-testid": string;
  "data-visible"?: string;
};

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

  const props: VisibilityControlProps = {
    className: `${className ?? ""} flex gap-x-1.5 ${
      !visible ? "opacity-50 line-through print:hidden" : ""
    }`,
    "data-testid": "visibility-control",
  };

  if (visible) {
    props["data-visible"] = "";
  }

  return createElement(
    tag,
    props,
    <input
      className="print:hidden"
      type="checkbox"
      checked={visible}
      onChange={() => setVisible(!visible)}
    />,
    children
  );
}
