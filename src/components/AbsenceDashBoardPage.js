import React from 'react';
import AbsenceList from './AbsenceList';
import AbsenceListFilters from './AbsenceListFilters';

const AbsenceDashBoardPage = () => (
    <div>
        <AbsenceListFilters />
        <AbsenceList />
    </div>
);

export default AbsenceDashBoardPage;