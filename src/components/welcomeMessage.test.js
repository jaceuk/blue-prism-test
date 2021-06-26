import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import WelcomeMessage from "./WelcomeMessage";

describe("Error", () => {
  test("renders header with correct content", () => {
    render(<WelcomeMessage />);
    expect(screen.getByTestId("welcome-message")).toHaveTextContent(
      "Please click 'View Entries' on a schedule to view the log entries."
    );
  });

  test("welcome message snapshot", () => {
    const tree = renderer.create(<WelcomeMessage />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <p
        data-testid="welcome-message"
      >
        Please click 'View Entries' on a schedule to view the log entries.
      </p>
    `);
  });
});
