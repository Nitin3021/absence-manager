import React from 'react';
import { shallow } from 'enzyme';
import { AbsencesSummary } from '../../components/AbsencesSummary';

test('should correctly render AbsencesSummary with 1 absence', () => {
    const wrapper = shallow(<AbsencesSummary absenceCount={1} absenceHiddenCount={41} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render AbsencesSummary with multiple absences', () => {
    const wrapper = shallow(<AbsencesSummary absenceCount={21} absenceHiddenCount={21} />);
    expect(wrapper).toMatchSnapshot();
});