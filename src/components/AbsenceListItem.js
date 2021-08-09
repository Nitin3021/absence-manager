/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import moment from 'moment';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';
import selectAbsences from '../selectors/absences';

export const AbsenceListItem = (props) => {
    const absences = props.absences.map((absence) => {
        let status;
        if (absence.rejectedAt) {
            status = 'Rejected'
        } else if (absence.confirmedAt) {
            status = 'Confirmed'
        } else {
            status = 'Requested'
        }

        return {
            key: absence.key,
            name: absence.name,
            type: absence.type ? (absence.type.charAt(0).toUpperCase() + absence.type.slice(1)) : 'No Type',
            createdAt: moment(absence.createdAt).format('DD.MMM.YYYY'),
            startDate: moment(absence.startDate).format('DD.MMM.YYYY'),
            endDate: moment(absence.endDate).format('DD.MMM.YYYY'),
            status,
            admitterNote: absence.admitterNote
        }
    })

    const columns = [
        { dataField: "name", text: "Member name", sort: true },
        { dataField: "type", text: "Absence Type", sort: true },
        { dataField: "createdAt", text: "Created On" },
        { dataField: "startDate", text: "Start date" },
        { dataField: "endDate", text: "End Date" },
        { dataField: "status", text: "Status", sort: true },
        { dataField: "admitterNote", text: "Admitter's Note" }
    ]

    return (
        <div className="content-container-table">
            {
                props.absences.length === 0 ? (
                    <div>
                        <span className="list-item-message">No Absence!</span>
                    </div>
                ) : (
                    (
                        <BootstrapTable
                            id="table-absences"
                            keyField="key"
                            data={absences}
                            columns={columns}
                            pagination={paginationFactory()}
                        />
                    )
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    absences: selectAbsences(state.absences, state.filters)
})

export default connect(mapStateToProps)(AbsenceListItem);