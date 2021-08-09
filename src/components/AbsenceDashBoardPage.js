import React from 'react';
import AbsenceListItem from './AbsenceListItem';
import AbsenceListFilters from './AbsenceListFilters';
import AbsencesSummary from './AbsencesSummary';
import Footer from './Footer';

const AbsenceDashBoardPage = () => (
    <div className="main-container">
        <AbsencesSummary />
        <AbsenceListFilters />
        <AbsenceListItem />
        <Footer />
    </div>
);

export default AbsenceDashBoardPage;