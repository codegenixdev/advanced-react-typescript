import { Button } from "@/commenting-components";
import type { ComponentProps } from "react";

// Get all props from Button component
type ButtonProps = ComponentProps<typeof Button>;

// Create a SubmitButton that reuses Button props but with fixed onClick
type SubmitButtonProps = Omit<ButtonProps, "onClick">;

/**
 * A specialized button that always shows an alert on click
 */
const SubmitButton = (props: SubmitButtonProps) => {
  return <Button {...props} onClick={() => alert("Submitted!")} />;
};

export { SubmitButton };
