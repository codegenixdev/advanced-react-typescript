type ButtonProps = {
  /** The text to display inside the button
   * @default "Click me"
   */
  text?: string;

  /** Function to call when button is clicked */
  onClick?: () => void;

  /** Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
};

/**
 * A simple reusable button component.
 *
 * @example
 * // Basic usage
 * <Button text="Save" onClick={() => alert('Saved!')} />
 */
const Button = ({
  text = "Click me",
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {text}
    </button>
  );
};

export { Button };
