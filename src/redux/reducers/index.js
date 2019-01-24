import { SEARCH_FETCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_CHANGE_PAGE, CHARACTER_FETCH } from '../actions';

const initialState = {
    searchResults: [],
    searchName: '',
    searchServer: '',
    searchPage: '1',
    searchMax: '',
    loading: false,
    character: {},
    parses: [],
    parseAverage: '',
    error: null,
    gear: {},
}

export const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_FETCH:
            return { 
                ...state, 
                loading: true ,
            };
        case SEARCH_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                searchName: action.payload.searchName,
                searchServer: action.payload.searchServer,
                searchResults: action.payload.results, 
                searchPage: action.payload.pagination.page, 
                searchMax: action.payload.pagination.page_total,
                error: null,
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}