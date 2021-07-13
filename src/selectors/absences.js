import moment from 'moment';

export default (absences, { text, startDate, endDate }) => {
    return absences.filter((absence) => {
        const createdAtMoment = new moment(absence.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = absence.type.toLowerCase().includes(text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;
    })
};