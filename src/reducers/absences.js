const absencesReducerDefaultState = [{
    "crewId": 352,
    "id": 709,
    "image": "https://loremflickr.com/300/400",
    "name": "Max",
    "userId": 644
},
{
    "crewId": 352,
    "id": 713,
    "image": "https://loremflickr.com/300/400",
    "name": "Ines",
    "userId": 649
}]

export default (state = absencesReducerDefaultState, action) => {
    switch (action) {
        case 'SET_ABSENCES':
            return action.absences;
        default:
            return state;
    }
}