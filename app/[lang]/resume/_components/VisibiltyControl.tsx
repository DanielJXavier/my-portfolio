import { ReactNode, useState } from "react";

export default function VisibilityControl({
  children,
  className,
  defaultVisible,
}: {
  children: ReactNode;
  className?: string;
  defaultVisible?: boolean;
}) {
  const [visible, setVisible] = useState(defaultVisible ?? true);

  return (
    <li
      className={`${className ?? ""} flex gap-x-1.5 ${
        !visible ? "opacity-50 line-through print:hidden" : ""
      }`}
      data-testid="visibility-control"
      {...(visible ? { "data-visible": "" } : {})}
    >
      <input
        className="print:hidden"
        type="checkbox"
        checked={visible}
        onChange={() => setVisible(!visible)}
      />
      {children}
    </li>
  );
}
