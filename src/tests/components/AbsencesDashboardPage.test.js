import React from 'react';
import { shallow } from 'enzyme';
import AbsenceDashBoardPage from '../../components/AbsenceDashBoardPage';

test('should render AbsenceDashBoardPage correctly', () => {
    const wrapper = shallow(<AbsenceDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});