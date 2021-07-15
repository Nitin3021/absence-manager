/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable new-cap */
import moment from 'moment';

export default (absences, { text, startDate, endDate, sortBy }) => absences.filter((absence) => {
    const startDateMoment = new moment(absence.startDate);
    const endDateMoment = new moment(absence.endDate);
    const startDateMatch = startDate ? startDate.isSameOrBefore(startDateMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(endDateMoment, 'day') : true;
    const textMatch = absence.type.toLowerCase().includes(text.trim().toLowerCase());

    return textMatch && startDateMatch && endDateMatch;
}).sort((a, b) => {
    if (sortBy === 'createdAt') {
        return a.createdAt < b.createdAt ? 1 : -1;
    } if (sortBy === 'startDate') {
        return a.startDate < b.startDate ? 1 : -1;
    } if (sortBy === 'endDate') {
        return a.endDate < b.endDate ? 1 : -1;
    }
});