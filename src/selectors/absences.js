import moment from 'moment';

export default (absences, { text, startDate, endDate }) => {
    return absences.filter((absence) => {
        const startDateMoment = new moment(absence.startDate);
        const endDateMoment = new moment(absence.endDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(startDateMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(endDateMoment, 'day') : true;
        const textMatch = absence.type.toLowerCase().includes(text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;
    })
};