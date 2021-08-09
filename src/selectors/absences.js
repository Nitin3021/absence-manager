/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable new-cap */
import moment from 'moment';

export default (absences, { name, text, startDate, endDate, sortBy, selectType }) => absences.filter((absence) => {
    const startDateMoment = new moment(absence.startDate);
    const endDateMoment = new moment(absence.endDate);
    const startDateMatch = startDate ? startDate.isSameOrBefore(startDateMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(endDateMoment, 'day') : true;
    const textMatch = absence.name.toLowerCase().includes(text.trim().toLowerCase());
    const selectTypeMatch = selectType !== 'selectType' ? absence.type.includes(selectType) : true

    return textMatch && startDateMatch && endDateMatch && selectTypeMatch;
}).sort((a, b) => {
    if (sortBy === 'createdAt') {
        return a.createdAt < b.createdAt ? 1 : -1;
    } if (sortBy === 'startDate') {
        return a.startDate < b.startDate ? 1 : -1;
    } if (sortBy === 'endDate') {
        return a.endDate < b.endDate ? 1 : -1;
    }
});