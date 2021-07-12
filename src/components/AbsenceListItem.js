import React from 'react';

const AbsenceListItem = ({ name, type, startDate, endDate, memberNote, confirmedAt, rejectedAt, admitterNote }) => (
    <div>
        <h3>
            <span>{name} </span>
            <span>{type} </span>
            <span>{startDate} </span>
            <span>{endDate} </span>
            <span>{memberNote} </span>
            <span>{confirmedAt} </span>
            <span>{rejectedAt} </span>
            <span>{admitterNote} </span>
        </h3>
    </div>
)

export default AbsenceListItem;