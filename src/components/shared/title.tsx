import clsx from "clsx";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface TitleProps {
  size?: TitleSize;
  className?: string;
  text: string;
}

export const Title = ({ size = "sm", className, text }: TitleProps) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[1rem]", // 16px
    sm: "text-[1.375rem]", // 22px  
    md: "text-[1.625rem]", // 26px  
    lg: "text-[2rem]", // 32px
    xl: "text-[2.5rem]", // 40px
    "2xl": "text-[3rem]", // 48px
  } as const;

  const Tag = mapTagBySize[size];

  return (
    <Tag className={clsx(mapClassNameBySize[size], className)}>{text}</Tag>
  );
};
