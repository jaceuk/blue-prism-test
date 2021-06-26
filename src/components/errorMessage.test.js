import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import ErrorMessage from "./ErrorMessage";

describe("Error", () => {
  test("renders error with additional message", () => {
    const props = {
      error: "This is a test error message.",
    };

    render(<ErrorMessage {...props} />);
    expect(screen.getByTestId("error")).toHaveTextContent(props.error);
  });

  test("error snapshot", () => {
    const tree = renderer.create(<ErrorMessage />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="alert error"
        data-testid="error"
        role="alert"
      >
        <div
          className="icon icon-error"
        />
        <div
          className="text"
        />
      </div>
    `);
  });
});
