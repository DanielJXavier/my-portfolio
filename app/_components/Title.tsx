import { ReactNode } from "react";

type TitleProps = Readonly<{
  children: ReactNode;
  icon?: ReactNode;
}>;

export default function Title({ children, icon }: TitleProps) {
  return (
    <h1
      className="text-xl md:text-2xl lg:text-3xl flex items-center gap-x-2 [&_svg]:md:w-8 [&_svg]:md:h-8"
      data-testid="title"
    >
      {icon}
      {children}
    </h1>
  );
}
