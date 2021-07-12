import React from 'react';
import { connect } from 'react-redux';

export const AbsenceList = (props) => (
    <div>
        <div>
            {
                props.absences.map((absence) => {
                    return <p key={absence.id}>{absence.name} {absence.crewId}</p>;
                })
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    absences: state.absences
})

export default connect(mapStateToProps)(AbsenceList);