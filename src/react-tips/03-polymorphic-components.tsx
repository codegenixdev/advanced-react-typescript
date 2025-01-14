import { ReactNode } from "react";

type ButtonProps = {
  as: "button" | "a" | "div";
  children: ReactNode;
  onClick?: () => void;
  href?: string;
};

const Button = ({ as: Component, children, ...props }: ButtonProps) => {
  return <Component {...props}>{children}</Component>;
};

const PolymorphicComponent = () => {
  return (
    <Button as="button" onClick={() => alert("Clicked!")}>
      Click me
    </Button>
  );
};

export { PolymorphicComponent };
