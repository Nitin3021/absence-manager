import membersData from '../api/json_files/members.json'
import absencesData from '../api/json_files/absences.json'

// Absence details
export const setAbsences = (absences) => ({
    type: 'SET_ABSENCES',
    absences
});

export const startSetAbsences = () => {
    return (dispatch) => {
        let absences = [];
        console.log(absencesData.payload.length)

        for (let i = 0; i < absencesData.payload.length; i++) {
            absences.push({
                key: i,
                ...absencesData.payload[i],
                ...(membersData.payload.find((itmInner) => itmInner.userId === absencesData.payload[i].userId))
            }
            );
        }
        console.log(absences)

        dispatch(setAbsences(absences));
    }
}