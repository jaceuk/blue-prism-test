import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateError } from '../redux/slices/error.slice';
import { updateSchedule } from '../redux/slices/schedule.slice';
import { formatISOString } from '../helpers/dateTime.helper';

import WelcomeMessage from './WelcomeMessage';
import ErrorMessage from './ErrorMessage';

const LogEntries = () => {
    const dispatch = useDispatch();
    const reduxScheduleId = useSelector((state) => state.schedule.id);
    const reduxIsRetired = useSelector((state) => state.schedule.isRetired);
    const reduxScheduleName = useSelector((state) => state.schedule.name);
    const reduxError = useSelector((state) => state.error.value);
    const [logEntries, setLogEntries] = useState([]);
    const [sortBy, setSortBy] = useState({
        column: 'id',
        order: 'asc'
    });
    const [filterBy, setFilterBy] = useState({
        column: '',
        value: ''
    });

    useEffect(async () => {
        if (reduxScheduleId) {
            let filter;
            let sort;
            if (sortBy.column && sortBy.order) sort = `&_sort=${sortBy.column}&_order=${sortBy.order}`;
            if (filterBy.column && filterBy.value) filter = `&${filterBy.column}=${filterBy.value}`;

            const response = await axios.get(`http://localhost:3000/scheduleLogs?scheduleId=${reduxScheduleId}${sort}${filter}`)
                .catch((err) => {
                    dispatch(updateError(`Error fetching log entries: ${err}`));
                });

            if (response) {
                if (response.data.length > 0) {
                    setLogEntries(response.data);
                    dispatch(updateError(''));
                } else {
                    dispatch(updateError('No log entries found'));
                    setLogEntries('');
                }
            }
        } else {
            setLogEntries('');
        }
    }, [reduxScheduleId, sortBy, filterBy]);

    const clearReduxSchedule = () => {
        window.location.href = `#schedule-${reduxScheduleId}`;
        dispatch(updateSchedule(''));
    };

    const sortResults = (e) => {
        const valuesArray = e.target.value.split('-');
        setSortBy({
            column: valuesArray[0],
            order: valuesArray[1]
        });
    };

    const filterResults = (e) => {
        const valuesArray = e.target.value.split('-');
        // if set to all then set remove filters value so the filter is removed from the query
        if (valuesArray[1] === 'all') valuesArray[1] = '';
        setFilterBy({
            column: valuesArray[0],
            value: valuesArray[1]
        });
    };

    return (
        <section className={reduxScheduleId ? 'log-entries' : 'log-entries hide-on-mobile'} data-testid="log-entries">
            <div className="scrollable">
                <div className="panel">
                    {logEntries.length === 0 && !reduxError && <WelcomeMessage />}
                    {!reduxScheduleId && reduxError && <ErrorMessage error={reduxError} />}
                    {reduxScheduleId && (
                        <>
                            <div className={reduxIsRetired ? 'retired' : 'schedule'}>
                                <div className="title">
                                    <span className="icon icon-file" aria-hidden="true" />
                                    <div className="title-text">
                                        <div className="schedule-id">Log entries for<span className="retired-text">Retired</span></div>
                                        <h2 className="schedule-name">{reduxScheduleName}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="options">
                                <label htmlFor="filter">Status
                                    <select name="filter" id="filter" onChange={filterResults} value={`${filterBy.column}-${filterBy.value}`}>
                                        <option value="status-all">All</option>
                                        <option value="status-Terminated">Terminated</option>
                                        <option value="status-Pending">Pending</option>
                                        <option value="status-Completed">Completed</option>
                                        <option value="status-Running">Running</option>
                                        <option value="status-Exception">Exception</option>
                                    </select>
                                </label>
                                <label htmlFor="sort">Sort by
                                    <select name="sort" id="sort" onChange={sortResults} value={`${sortBy.column}-${sortBy.order}`}>
                                        <option value="id-asc">ID (asc)</option>
                                        <option value="id-desc">ID (desc)</option>
                                        <option value="startTime-desc">Start Time (asc)</option>
                                        <option value="startTime-asc">Start Time (desc)</option>
                                        <option value="endTime-desc">End Time (asc)</option>
                                        <option value="endTime-asc">End Time (desc)</option>
                                        <option value="status-desc">Status (asc)</option>
                                        <option value="status-asc">Status (desc)</option>
                                    </select>
                                </label>
                            </div>
                            <div className="responsive-table">
                                {reduxScheduleId && (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                                <th>Server Name</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reduxError ? (
                                                <tr>
                                                    <td colSpan="5"><ErrorMessage error={reduxError} /></td>
                                                </tr>
                                            ) : null}
                                            {logEntries ? logEntries.map((logEntry) => (
                                                <tr key={logEntry.id}>
                                                    <td data-title="Id">{logEntry.id}</td>
                                                    <td data-title="Start Time">{formatISOString(logEntry.startTime)}</td>
                                                    <td data-title="End Time">{formatISOString(logEntry.endTime)}</td>
                                                    <td data-title="Server">{logEntry.serverName}</td>
                                                    <td data-title="Status">{logEntry.status}</td>
                                                </tr>
                                            )) : null}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <footer className="footer">Please note all dates/times are local time.</footer>

                <button type="button" className="back-button" onClick={clearReduxSchedule}>
                    <span className="icon icon-chevron-left" aria-hidden="true" />
                    Back to Schedules
                </button>
            </div>
        </section>
    );
};

export default LogEntries;
