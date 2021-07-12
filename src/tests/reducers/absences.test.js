import absencesReducer from '../../reducers/absences';

test('should set default state', () => {
    const state = absencesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});