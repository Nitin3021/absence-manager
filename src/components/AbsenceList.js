import React from 'react';
import { connect } from 'react-redux';
import AbsenceListItem from './AbsenceListItem';
import selectAbsences from '../selectors/absences';

export const AbsenceList = (props) => (
    <div>
        <div>
            {
                props.absences.length === 0 ? (
                    <div>
                        <span>No Absences!</span>
                    </div>
                ) : (
                    props.absences.map((absence) => {
                        return <AbsenceListItem key={absence.key} {...absence} />;
                    })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    absences: selectAbsences(state.absences, state.filters)
})

export default connect(mapStateToProps)(AbsenceList);