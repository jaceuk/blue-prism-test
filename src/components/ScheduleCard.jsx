import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateError } from '../redux/slices/error.slice';
import { updateSchedule } from '../redux/slices/schedule.slice';
import { formatISOString, dayToString } from '../helpers/dateTime.helper';

const ScheduleCard = (props) => {
    const dispatch = useDispatch();
    const { data } = props;
    const { id } = data;
    const { name } = data;
    const { description } = data;
    const { tasksCount } = data;
    const { dayOfMonth } = data;
    const { timePeriod } = data;
    const { intervalType } = data;
    const { isRetired } = data;
    const dayOfWeek = dayToString(data.dayOfWeek);
    const startPoint = formatISOString(data.startPoint);
    const endPoint = formatISOString(data.endPoint);
    const startDate = formatISOString(data.startDate);
    const endDate = formatISOString(data.endDate);
    const reduxScheduleId = useSelector((state) => state.schedule.id);
    const reduxSchedule = useSelector((state) => state.schedule);
    const [retiredState, setRetiredState] = useState(isRetired);
    const [detailsVisible, setDetailsVisible] = useState(false);

    const updateScheduleId = () => {
        dispatch(updateSchedule({ id, name, isRetired }));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const updateRetired = async () => {
        // toggle isRetired
        data.isRetired = !data.isRetired;
        const response = await axios.put(`http://localhost:3000/schedules/${id}`, data)
            .catch((err) => {
                dispatch(updateError(`Error updating schedule: ${err}`));
            });

        if (response) {
            if (response.status === 200) {
                setRetiredState(data.isRetired);
                // only update redux state if this is the selected schedule
                if (id === reduxScheduleId) {
                    dispatch(updateSchedule({ ...reduxSchedule, isRetired: data.isRetired }));
                }
            } else {
                // if update fails reset isRetired
                data.isRetired = !data.isRetired;
                dispatch(updateError('Error updating schedule.'));
            }
        }
    };

    const toggleDetails = () => {
        setDetailsVisible(!detailsVisible);
    };

    const cardId = `schedule-${id}`;
    const detailsId = `details-${id}`;

    return (
        <article id={cardId} className={id === reduxScheduleId ? 'card selected' : 'card'} data-testid="schedule-card">
            <div className={retiredState ? 'retired' : 'schedule'}>
                <div className="title">
                    <span className="icon icon-clock" aria-hidden="true" />
                    <div className="title-text">
                        <div className="schedule-id">{id}<span className="retired-text">Retired</span></div>
                        <h2 className="schedule-name">{name}</h2>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <button className="show-details" type="button" aria-expanded="true" aria-controls={detailsId} onClick={toggleDetails}>
                    {detailsVisible
                        ? <>Hide Details<span className="sr-only"> for {name}</span></>
                        : <>Show Details<span className="sr-only"> for {name}</span></>}
                    {detailsVisible
                        ? <span className="icon icon-chevron-up" aria-hidden="true" />
                        : <span className="icon icon-chevron-down" aria-hidden="true" />}
                </button>

                <div id={detailsId} className={detailsVisible ? 'details visible' : 'details'}>
                    <div className="detail"><strong>Description:</strong> {description}</div>
                    <div className="detail"><strong>Tasks Count:</strong> {tasksCount}</div>
                    <div className="detail"><strong>Start Point:</strong> <time dateTime="2021-09-01T15:59:28.949Z">{startPoint}</time></div>
                    <div className="detail"><strong>End Point:</strong> <time dateTime="2021-09-01T15:59:28.949Z">{endPoint}</time></div>
                    <div className="detail"><strong>Day of Week:</strong> <data value="5"> {dayOfWeek}</data></div>
                    <div className="detail"><strong>Day of Month:</strong> {dayOfMonth}</div>
                    <div className="detail"><strong>Start Date:</strong> <time dateTime="2021-09-01T15:59:28.949Z">{startDate}</time></div>
                    <div className="detail"><strong>End Date:</strong> <time dateTime="2021-09-01T15:59:28.949Z">{endDate}</time></div>
                    <div className="detail"><strong>Time Period:</strong> {timePeriod}</div>
                    <div className="detail"><strong>Interval Type:</strong> {intervalType}</div>
                </div>
            </div>

            <div className="card-footer">
                <button type="button" className="button button-secondary" onClick={updateRetired}>{retiredState ? 'Unretire' : 'Retire'}</button>
                <button type="button" className="button button-primary" onClick={updateScheduleId}>View Entries<span className="sr-only"> for {name}</span></button>
            </div>
        </article>
    );
};

export default ScheduleCard;
