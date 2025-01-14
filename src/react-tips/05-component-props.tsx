import type { ComponentProps, ReactNode } from "react";

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => <button onClick={onClick}>{children}</button>;

type ButtonProps = ComponentProps<typeof Button>;

type SubmitButtonProps = Omit<ButtonProps, "onClick">;

const SubmitButton = (props: SubmitButtonProps) => {
  return <Button {...props} onClick={() => alert("Submitted!")} />;
};

export { SubmitButton };
