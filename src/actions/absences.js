// Absence details
export const setAbsences = (absences) => ({
    type: 'SET_ABSENCES',
    absences
});

export const startSetAbsences = () => {
    return(dispatch) => {
        const absences = [];

        dispatch(setAbsences(absences));
    }
}