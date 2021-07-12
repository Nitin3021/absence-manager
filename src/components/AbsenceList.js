import React from 'react';
import { connect } from 'react-redux';
import AbsenceListItem from './AbsenceListItem';

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
    absences: state.absences
})

export default connect(mapStateToProps)(AbsenceList);