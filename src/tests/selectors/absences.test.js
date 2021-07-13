import selectAbsences from '../../selectors/absences';
import moment from 'moment';
import absences from '../fixtures/absences';

test('should filter by absences type value', () => {
    const filters = {
        text: 'vacation',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectAbsences(absences, filters);
    expect(result).toEqual([ absences[0], absences[2] ]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        startDate: moment(0),
        endDate: undefined
    };
    
    const result = selectAbsences(absences, filters);
    expect(result).toEqual([ absences[0], absences[2] ]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = selectAbsences(absences, filters);
    expect(result).toEqual([ absences[1] ]);
});