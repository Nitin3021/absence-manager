// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'createdAt'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'SORT_BY_CREATED_DATE':
            return {
                ...state,
                sortBy: 'createdAt'
            };
        case 'SORT_BY_START_DATE':
            return {
                ...state,
                sortBy: 'startDate'
            };
        case 'SORT_BY_END_DATE':
            return {
                ...state,
                sortBy: 'endDate'
            };
        default:
            return state;
    }
};