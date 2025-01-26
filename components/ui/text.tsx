export type TextProps = {
  variant?: "div" | "span" | "p" | "section" | "article" | "aside";
  children: React.ReactNode;
  className?: string;
};

export default function Text({
  variant = "div",
  children,
  className = "",
}: TextProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return <Tag className={`${className}`}>{children}</Tag>;
}
