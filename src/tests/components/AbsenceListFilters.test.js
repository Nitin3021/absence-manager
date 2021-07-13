import React from 'react';
import { shallow } from 'enzyme';
import { AbsenceListFilters } from '../../components/AbsenceListFilters';
import { filters } from '../fixtures/filters';

let setTextFilter, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <AbsenceListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render AbsenceListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});