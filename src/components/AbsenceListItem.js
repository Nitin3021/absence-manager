import React from 'react';
import moment from 'moment';

const AbsenceListItem = ({ absences }) => {
    return absences.map((absence) => {
        const { key, name, type, createdAt, startDate, endDate, admitterNote } = absence;
        return (
            <tr key={key}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{moment(createdAt).format('DD.MMM.YYYY')}</td>
                <td>{moment(startDate).format('DD.MMM.YYYY')}</td>
                <td>{moment(endDate).format('DD.MMM.YYYY')}</td>
                <td>{admitterNote}</td>
            </tr>
        )
    })
}

export default AbsenceListItem;