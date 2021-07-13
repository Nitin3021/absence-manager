import React from 'react';
import { shallow } from 'enzyme';
import { AbsenceList } from '../../components/AbsenceList';

test('should render AbsenceList correctly', () => {
    const absences = [{
        "key": 1,
        "crewId": 352,
        "id": 709,
        "image": "https://loremflickr.com/300/400",
        "name": "Max",
        "userId": 644
    },
    {
        "key": 2,
        "crewId": 352,
        "id": 713,
        "image": "https://loremflickr.com/300/400",
        "name": "Ines",
        "userId": 649
    }]
    
    const wrapper = shallow(<AbsenceList absences={absences} />);
    expect(wrapper).toMatchSnapshot();
});