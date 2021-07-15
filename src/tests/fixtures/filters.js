import moment from "moment";

const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'createdAt'
};

const altFilters = {
    text: 'vacation',
    startDate: moment(0),
    endDate: moment(0).add(4, 'days'),
    sortBy: 'startDate'
};

export { filters, altFilters };