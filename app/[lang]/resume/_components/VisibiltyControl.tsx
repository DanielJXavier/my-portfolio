import { ReactNode, useState } from "react";

export default function VisibilityControl({
  children,
}: {
  children: ReactNode;
}) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="flex gap-x-1.5" data-testid="visibility-control">
      <input
        className="print:hidden"
        type="checkbox"
        checked={visible}
        onChange={() => setVisible(!visible)}
      />
      <div
        className={`${!visible ? "opacity-50 line-through print:hidden" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
