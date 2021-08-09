import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
    setTextFilter,
    setStartDate,
    setEndDate,
    sortByCreatedDate,
    sortByStartDate,
    sortByEndDate,
    setSelectType
} from '../actions/filters';

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

    onTypeChange = (e) => {
        this.props.setSelectType(e.target.value)
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search member name"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>

                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.selectType}
                            onChange={this.onTypeChange}
                        >
                            <option value="selectType" defaultValue>Select Type</option>
                            {
                                this.props.uniqueAbsenceType.map((type) =>
                                    <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                                )
                            }
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates
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

const mapStateToProps = (state) => {
    const uniqueAbsenceType = state.absences
        .map((absence) => absence.type)
        .filter((type, index, arr) => arr.indexOf(type) === index);

    return {
        filters: state.filters,
        uniqueAbsenceType
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByCreatedDate: () => dispatch(sortByCreatedDate()),
    sortByStartDate: () => dispatch(sortByStartDate()),
    sortByEndDate: () => dispatch(sortByEndDate()),
    setSelectType: (selectType) => dispatch(setSelectType(selectType))
});

export default connect(mapStateToProps, mapDispatchToProps)(AbsenceListFilters);