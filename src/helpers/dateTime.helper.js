export const formatISOString = (ISOstring) => {
    const date = new Date(ISOstring);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedDateTime = `${formattedDate}, ${formattedTime}`;

    return formattedDateTime;
};

export const dayToString = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
};
