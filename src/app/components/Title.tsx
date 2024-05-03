import { ReactNode } from "react";

type TitleProps = Readonly<{
  children: ReactNode;
  icon?: ReactNode;
}>;

export default function Title({ children, icon }: TitleProps) {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 xl:mb-8 flex items-center gap-x-2">
      {icon}
      {children}
    </h1>
  );
}
