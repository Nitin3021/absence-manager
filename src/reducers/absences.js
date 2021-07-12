const absencesReducerDefaultState = [];

export default (state = absencesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ABSENCES':
            return action.absences
        default:
            return state;
    }
}