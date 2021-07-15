/* eslint-disable no-shadow */
/* eslint-disable no-undef */
// Absence details
export const setAbsences = (absences) => ({
    type: 'SET_ABSENCES',
    absences
});

export const startSetAbsences = () => (dispatch) => {
    let absences = [];
    const url = 'https://json-data-api.herokuapp.com/';

    const options = {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' })
    }

    async function getData() {
        const members = await fetch(url, options)
        absences = await members.json();
        return JSON.parse(absences)
    }

    return getData().then((absences) => {
        dispatch(setAbsences(absences.membersAbsences));
    });
}