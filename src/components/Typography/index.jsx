import styles from "./typography.module.css";

const Tags = {
  h1: "h1",
  h2: "h2",
  p: "p",
};

export const Typography = ({ children, variant }) => {
  const Component = Tags[variant] || "p";
  const variantClass = styles[variant] || "p";

  return <Component className={variantClass}>{children}</Component>;
};
