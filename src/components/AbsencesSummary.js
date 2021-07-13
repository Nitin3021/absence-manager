import React from 'react';
import { connect } from 'react-redux';
import selectAbsences from '../selectors/absences';

export const AbsencesSummary = (props) => {
    const absenceWord = props.absenceCount === 1 ? 'Absence' : 'Absences';
    const hiddenAbsenceCountWord = props.hiddenAbsenceCount === 1 ? 'Absence' : 'Absences';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing total {props.absenceCount} {absenceWord}</h1>
                {
                    props.hiddenAbsenceCount === 0 ? (
                        <p>No filtered absence!</p>
                    ) : (
                        <p>Filtered {props.hiddenAbsenceCount} {hiddenAbsenceCountWord} </p>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleAbsences = selectAbsences(state.absences, state.filters)

    return {
        absenceCount: visibleAbsences.length,
        hiddenAbsenceCount: state.absences.length - visibleAbsences.length
    }
}

export default connect(mapStateToProps)(AbsencesSummary);