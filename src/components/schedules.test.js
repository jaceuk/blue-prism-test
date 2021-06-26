import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";

import Schedules from "./Schedules";

describe("Schedules", () => {
  test("renders schedules", () => {
    render(
      <Provider store={store}>
        <Schedules />
      </Provider>
    );
    expect(screen.getByTestId("schedules")).toBeInTheDocument();
  });

  test("schedules snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Schedules />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
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
    `);
  });
});
