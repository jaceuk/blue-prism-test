import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateError } from '../redux/slices/error.slice';
import { updateSchedule } from '../redux/slices/schedule.slice';

import ScheduleCard from './ScheduleCard';
import ErrorMessage from './ErrorMessage';

const Schedules = () => {
    const dispatch = useDispatch();
    const reduxScheduleId = useSelector((state) => state.schedule.id);
    const [schedules, setSchedules] = useState([]);
    const [filterBy, setFilterBy] = useState({
        column: '',
        value: ''
    });

    useEffect(async () => {
        let filter;
        if (filterBy.column && filterBy.value) filter = `${filterBy.column}=${filterBy.value}`;

        const response = await axios.get(`http://localhost:3000/schedules?${filter}`)
            .catch((err) => {
                dispatch(updateError(`Error fetching schedules. ${err}`));
            });

        if (response) {
            if (response.data.length > 0) {
                setSchedules(response.data);
                dispatch(updateError(''));
            } else {
                dispatch(updateError('No schedules found'));
                setSchedules([]);
            }
        }
    }, [filterBy]);

    const filterCards = (e) => {
        const valuesArray = e.target.value.split('-');
        // if set to all then set remove filters value so the filter is removed from the query
        if (valuesArray[1] === 'all') valuesArray[1] = '';
        setFilterBy({
            column: valuesArray[0],
            value: valuesArray[1]
        });
        // remove all log entries when filter changes
        dispatch(updateSchedule(''));
    };

    return (
        <section className={reduxScheduleId ? 'schedules hide-on-mobile' : 'schedules'} data-testid="schedules">
            <div className="scrollable">
                <div className="options">
                    <label htmlFor="is-retired">Day of Week
                        <select name="is-retired" id="is-retired" onChange={filterCards}>
                            <option value="dayOfWeek-all">All</option>
                            <option value="dayOfWeek-0">Sunday</option>
                            <option value="dayOfWeek-1">Monday</option>
                            <option value="dayOfWeek-2">Tuesday</option>
                            <option value="dayOfWeek-3">Wednesday</option>
                            <option value="dayOfWeek-4">Thursday</option>
                            <option value="dayOfWeek-5">Friday</option>
                            <option value="dayOfWeek-6">Saturday</option>
                        </select>
                    </label>
                </div>
                {schedules.length === 0 && <ErrorMessage error="No schedules found" />}
                {schedules.length > 0 && schedules.map((schedule) => (
                    <ScheduleCard
                        data={schedule}
                        key={schedule.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default Schedules;
