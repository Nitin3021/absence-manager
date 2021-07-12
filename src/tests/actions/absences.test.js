import { setAbsences } from '../../actions/absences';

test('should setup set absence action object with data', () => {
    const absences = [{
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
    const action = setAbsences(absences);
    expect(action).toEqual({
        type: 'SET_ABSENCES',
        absences
    });
});