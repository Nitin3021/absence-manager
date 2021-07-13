import React from 'react';
import { shallow } from 'enzyme';
import AbsenceListItem from '../../components/AbsenceListItem';

test('should render AbsenceListItem correctly', () => {
    const absences = [{
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2351,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": "sickness",
        "userId": 2664,
        "image": "https://loremflickr.com/300/400",
        "name": "Max",
    }]

    const wrapper = shallow(<AbsenceListItem absences={absences} />);
    expect(wrapper).toMatchSnapshot();
});