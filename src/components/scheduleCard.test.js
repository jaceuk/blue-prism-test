import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";

import ScheduleCard from "./ScheduleCard";

describe("Schedule card", () => {
  const props = {
    data: {
      id: 34485954,
      name: "Random Schedule Name (0.1547316859827359)",
      description: "ex nulla",
      isRetired: true,
      tasksCount: 10,
      startPoint: "2021-09-01T15:59:28.949Z",
      endPoint: "2021-04-19T00:52:33.427Z",
      dayOfWeek: 5,
      dayOfMonth: 19,
      startDate: "2021-08-26T22:34:19.581Z",
      endDate: "2021-08-29T18:14:08.337Z",
      timePeriod: 25,
      intervalType: "Never",
    },
  };

  test("renders schedule card", () => {
    render(
      <Provider store={store}>
        <ScheduleCard {...props} />
      </Provider>
    );
    const detailsElement = screen.getByTestId("schedule-card");
    expect(detailsElement).toBeInTheDocument();
  });

  test("header snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ScheduleCard {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <article
        className="card"
        data-testid="schedule-card"
        id="schedule-34485954"
      >
        <div
          className="retired"
        >
          <div
            className="title"
          >
            <span
              aria-hidden="true"
              className="icon icon-clock"
            />
            <div
              className="title-text"
            >
              <div
                className="schedule-id"
              >
                34485954
                <span
                  className="retired-text"
                >
                  Retired
                </span>
              </div>
              <h2
                className="schedule-name"
              >
                Random Schedule Name (0.1547316859827359)
              </h2>
            </div>
          </div>
        </div>
        <div
          className="card-body"
        >
          <button
            aria-controls="details-34485954"
            aria-expanded="true"
            className="show-details"
            onClick={[Function]}
            type="button"
          >
            Show Details
            <span
              className="sr-only"
            >
               for 
              Random Schedule Name (0.1547316859827359)
            </span>
            <span
              aria-hidden="true"
              className="icon icon-chevron-down"
            />
          </button>
          <div
            className="details"
            id="details-34485954"
          >
            <div
              className="detail"
            >
              <strong>
                Description:
              </strong>
               
              ex nulla
            </div>
            <div
              className="detail"
            >
              <strong>
                Tasks Count:
              </strong>
               
              10
            </div>
            <div
              className="detail"
            >
              <strong>
                Start Point:
              </strong>
               
              <time
                dateTime="2021-09-01T15:59:28.949Z"
              >
                2021-09-01, 16:59:28
              </time>
            </div>
            <div
              className="detail"
            >
              <strong>
                End Point:
              </strong>
               
              <time
                dateTime="2021-09-01T15:59:28.949Z"
              >
                2021-04-19, 01:52:33
              </time>
            </div>
            <div
              className="detail"
            >
              <strong>
                Day of Week:
              </strong>
               
              <data
                value="5"
              >
                 
                Friday
              </data>
            </div>
            <div
              className="detail"
            >
              <strong>
                Day of Month:
              </strong>
               
              19
            </div>
            <div
              className="detail"
            >
              <strong>
                Start Date:
              </strong>
               
              <time
                dateTime="2021-09-01T15:59:28.949Z"
              >
                2021-08-26, 23:34:19
              </time>
            </div>
            <div
              className="detail"
            >
              <strong>
                End Date:
              </strong>
               
              <time
                dateTime="2021-09-01T15:59:28.949Z"
              >
                2021-08-29, 19:14:08
              </time>
            </div>
            <div
              className="detail"
            >
              <strong>
                Time Period:
              </strong>
               
              25
            </div>
            <div
              className="detail"
            >
              <strong>
                Interval Type:
              </strong>
               
              Never
            </div>
          </div>
        </div>
        <div
          className="card-footer"
        >
          <button
            className="button button-secondary"
            onClick={[Function]}
            type="button"
          >
            Unretire
          </button>
          <button
            className="button button-primary"
            onClick={[Function]}
            type="button"
          >
            View Entries
            <span
              className="sr-only"
            >
               for 
              Random Schedule Name (0.1547316859827359)
            </span>
          </button>
        </div>
      </article>
    `);
  });
});
