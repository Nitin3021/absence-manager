import moment from 'moment';
import selectAbsences from '../../selectors/absences';
import absences from '../fixtures/absences';

test('should filter by absences type value', () => {
    const filters = {
        text: 'vacation',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[0], absences[2]]);
});

test('should filter by absences type value', () => {
    const filters = {
        text: 'sickness',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[0], absences[2]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[1]]);
});

test('should sort by createdDate', () => {
    const filters = {
        text: '',
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[2], absences[0], absences[1]]);
});

test('should sort by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'startDate',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[2], absences[0], absences[1]]);
});

test('should sort by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'endDate',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectAbsences(absences, filters);
    expect(result).toEqual([absences[0], absences[2], absences[1]]);
});