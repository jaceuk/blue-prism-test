import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";

import Header from './Header';

describe("Header", () => {
    test('renders header with correct h1', () => {
        render(<Header />);
        expect(screen.getByTestId('header')).toHaveTextContent('Blue Prism Schedules');
    });

    test("renders header", () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchInlineSnapshot(`
          <header
            className="header"
            data-testid="header"
          >
            <div
              className="container"
            >
              <h1
                className="logo"
              >
                <span
                  className="sr-only"
                >
                  Blue Prism Schedules
                </span>
              </h1>
            </div>
          </header>
        `);
      });
});

