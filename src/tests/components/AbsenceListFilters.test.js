import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { AbsenceListFilters } from '../../components/AbsenceListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter;
let setStartDate;
let setEndDate;
let sortByCreatedDate;
let sortByStartDate;
let sortByEndDate;
let wrapper;

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
            sortByCreatedDate={sortByCreatedDate}
            sortByStartDate={sortByStartDate}
            sortByEndDate={sortByEndDate}
        />
    );
});

test('should render AbsenceListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render AbsenceListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'sickness';
    wrapper.find('input').simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});