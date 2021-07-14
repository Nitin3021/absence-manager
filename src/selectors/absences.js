import moment from 'moment';

export default (absences, { text, startDate, endDate, sortBy }) => {
    return absences.filter((absence) => {
        const startDateMoment = new moment(absence.startDate);
        const endDateMoment = new moment(absence.endDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(startDateMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(endDateMoment, 'day') : true;
        const textMatch = absence.type.toLowerCase().includes(text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'createdAt') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'startDate') {
            return a.startDate < b.startDate ? 1 : -1;
        } else if (sortBy === 'endDate') {
            return a.endDate < b.endDate ? 1 : -1;
        }
    })
};