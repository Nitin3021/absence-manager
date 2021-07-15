import absencesReducer from '../../reducers/absences';
import absences from '../fixtures/absences';

test('should set default state', () => {
    const state = absencesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should set absences correctly', () => {
    const action = {
        type: 'SET_ABSENCES',
        absences: [absences[0]]
    }
    const state = absencesReducer(absences, action);
    expect(state).toEqual([absences[0]]);
});