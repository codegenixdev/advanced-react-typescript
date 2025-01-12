type ButtonProps = {
  as: "button" | "a" | "div";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

const Button = ({ as: Component, children, ...props }: ButtonProps) => {
  return <Component {...props}>{children}</Component>;
};

const Usage = () => {
  return (
    <>
      {/* As a button */}
      <Button as="button" onClick={() => alert("Clicked!")}>
        Click me
      </Button>

      {/* As a link */}
      <Button as="a" href="https://google.com">
        Go to Google
      </Button>

      {/* As a div */}
      <Button as="div" onClick={() => console.log("Div clicked")}>
        I'm a div
      </Button>
    </>
  );
};
