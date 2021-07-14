export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

export const sortByCreatedDate = () => ({
    type: 'SORT_BY_CREATED_DATE'
})

export const sortByStartDate = () => ({
    type: 'SORT_BY_START_DATE'
})

export const sortByEndDate = () => ({
    type: 'SORT_BY_END_DATE'
})