import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByCreatedDate,
    sortByStartDate,
    sortByEndDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action object with data', () => {
    const text = 'Sick';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});

test('should generate set text filter action object with no data', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });
});

test('should generate sort by createdDate action object', () => {
    expect(sortByCreatedDate()).toEqual({
        type: "SORT_BY_CREATED_DATE"
    });
});

test('should generate sort by startDate action object', () => {
    expect(sortByStartDate()).toEqual({
        type: "SORT_BY_START_DATE"
    });
});

test('should generate sort by endDate action object', () => {
    expect(sortByEndDate()).toEqual({
        type: "SORT_BY_END_DATE"
    });
});
