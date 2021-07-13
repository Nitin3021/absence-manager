import React from 'react';
import AbsenceList from './AbsenceList';
import AbsenceListFilters from './AbsenceListFilters';
import AbsencesSummary from './AbsencesSummary';

const AbsenceDashBoardPage = () => (
    <div>
        <AbsencesSummary />
        <AbsenceListFilters />
        <AbsenceList />
    </div>
);

export default AbsenceDashBoardPage;