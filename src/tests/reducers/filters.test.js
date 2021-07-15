import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'createdAt'
    });
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };

    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };

    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

test('should set sortBy to createdAt', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'startDate'
    };

    const action = { type: 'SORT_BY_CREATED_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('createdAt');
});

test('should set sortBy to startDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'endDate'
    };

    const action = { type: 'SORT_BY_START_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('startDate');
});

test('should set sortBy to endDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'startDate'
    };

    const action = { type: 'SORT_BY_END_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('endDate');
});
