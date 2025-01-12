interface MyComponentProps {
  /** Description of prop "label".
   * @default foobar
   * */
  label?: string;
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default function MyComponent({ label = "foobar" }: MyComponentProps) {
  return <div>Hello world {label}</div>;
}
