import { setAbsences } from '../../actions/absences';
import absences from '../fixtures/absences';

test('should setup set absence action object with data', () => {
    const action = setAbsences(absences);
    expect(action).toEqual({
        type: 'SET_ABSENCES',
        absences
    });
});