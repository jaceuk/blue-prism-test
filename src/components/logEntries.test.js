import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";

import LogEntries from "./LogEntries";

describe("Log entries", () => {
  const props = {
    reduxScheduleName: "Random Schedule Name (0.1547316859827359)",
    reduxIsRetired: false,
    reduxScheduleId: 34485954,
    logEntries: [
      {
        id: 78652453,
        startTime: "2021-10-04T01:33:25.419Z",
        endTime: "2021-04-19T13:30:35.688Z",
        serverName: "est consequat Lorem reprehenderit esse",
        status: "Terminated",
      },
      {
        id: 89488858,
        startTime: "2021-10-11T18:07:15.608Z",
        endTime: "2021-05-27T10:11:12.794Z",
        serverName: "occaecat culpa Lorem",
        status: "Running",
      },
    ],
  };

  test("renders log entries", () => {
    render(
      <Provider store={store}>
        <LogEntries {...props} />
      </Provider>
    );
    const detailsElement = screen.getByTestId("log-entries");
    expect(detailsElement).toBeInTheDocument();
  });

  test("log entries snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <LogEntries {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
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
    `);
  });
});
