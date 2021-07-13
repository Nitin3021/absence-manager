import React from 'react';
import { connect } from 'react-redux';
import AbsenceListItem from './AbsenceListItem';
import selectAbsences from '../selectors/absences';

export const AbsenceList = (props) => (
    <div className="content-container">
        {
            props.absences.length === 0 ? (
                <div>
                    <span>No Absences!</span>
                </div>
            ) : (
                <table id='table-absences'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Created On</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Admitters Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AbsenceListItem absences={props.absences} />
                    </tbody>
                </table>
            )
        }
    </div>
)

const mapStateToProps = (state) => ({
    absences: selectAbsences(state.absences, state.filters)
})

export default connect(mapStateToProps)(AbsenceList);