import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, 
         setStartDate, 
         setEndDate, 
         sortByCreatedDate, 
         sortByStartDate, 
         sortByEndDate } from '../actions/filters';

export class AbsenceListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'createdAt') {
            this.props.sortByCreatedDate();
        } else if (e.target.value === 'startDate') {
            this.props.sortByStartDate();
        } else if (e.target.value === 'endDate') {
            this.props.sortByEndDate();
        }
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search absence type"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="createdAt">Created On</option>
                            <option value="startDate">Start Date</option>
                            <option value="endDate">End Date</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByCreatedDate: () => dispatch(sortByCreatedDate()),
    sortByStartDate: () => dispatch(sortByStartDate()),
    sortByEndDate: () => dispatch(sortByEndDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(AbsenceListFilters);