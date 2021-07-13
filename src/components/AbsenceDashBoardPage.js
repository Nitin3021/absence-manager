import React from 'react';
import AbsenceListItem from './AbsenceListItem';
import AbsenceListFilters from './AbsenceListFilters';
import AbsencesSummary from './AbsencesSummary';

const AbsenceDashBoardPage = () => (
    <div>
        <AbsencesSummary />
        <AbsenceListFilters />
        <AbsenceListItem />
    </div>
);

export default AbsenceDashBoardPage;