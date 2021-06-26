import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

describe("App", () => {
  test("renders app", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  test("renders header", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="app"
        data-testid="app"
      >
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
        <main>
          <div
            className="container"
          >
            <section
              className="schedules"
              data-testid="schedules"
            >
              <div
                className="scrollable"
              >
                <div
                  className="options"
                >
                  <label
                    htmlFor="is-retired"
                  >
                    Day of Week
                    <select
                      id="is-retired"
                      name="is-retired"
                      onChange={[Function]}
                    >
                      <option
                        value="dayOfWeek-all"
                      >
                        All
                      </option>
                      <option
                        value="dayOfWeek-0"
                      >
                        Sunday
                      </option>
                      <option
                        value="dayOfWeek-1"
                      >
                        Monday
                      </option>
                      <option
                        value="dayOfWeek-2"
                      >
                        Tuesday
                      </option>
                      <option
                        value="dayOfWeek-3"
                      >
                        Wednesday
                      </option>
                      <option
                        value="dayOfWeek-4"
                      >
                        Thursday
                      </option>
                      <option
                        value="dayOfWeek-5"
                      >
                        Friday
                      </option>
                      <option
                        value="dayOfWeek-6"
                      >
                        Saturday
                      </option>
                    </select>
                  </label>
                </div>
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
                  >
                    No schedules found
                  </div>
                </div>
              </div>
            </section>
            <section
              className="log-entries hide-on-mobile"
              data-testid="log-entries"
            >
              <div
                className="scrollable"
              >
                <div
                  className="panel"
                >
                  <p
                    data-testid="welcome-message"
                  >
                    Please click 'View Entries' on a schedule to view the log entries.
                  </p>
                  
                  
                </div>
                <footer
                  className="footer"
                >
                  Please note all dates/times are local time.
                </footer>
                <button
                  className="back-button"
                  onClick={[Function]}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className="icon icon-chevron-left"
                  />
                  Back to Schedules
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    `);
  });
});
