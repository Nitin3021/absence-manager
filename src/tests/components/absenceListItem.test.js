import React from 'react';
import { shallow } from 'enzyme';
import { AbsenceListItem } from '../../components/AbsenceListItem';
import absences from '../fixtures/absences'

test('should render AbsenceListItem correctly', () => {
    const wrapper = shallow(<AbsenceListItem absences={absences} />);
    expect(wrapper).toMatchSnapshot();
});