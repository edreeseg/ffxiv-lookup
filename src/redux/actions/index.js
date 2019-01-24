import axios from 'axios';

export const SEARCH_FETCH = 'SEARCH_FETCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_CHANGE_PAGE = 'SEARCH_CHANGE_PAGE';
export const CHARACTER_FETCH = 'CHARACTER_FETCH';

export const searchFetch = (nameInput, serverInput) => dispatch => {
    dispatch({ type: SEARCH_FETCH });
    const name = nameInput.replace(/\s/, '+').trim().toLowerCase();
    const server = serverInput.trim();
    axios.get('https://xivapi.com/character/search?'
            + `name=${name}`
            + `&server=${server}`
            + `&key=437aa052c2664777a4d2a1bd`
            + '&page=1'
            + '&snake_case=1')
            .then(res => dispatch({ type: SEARCH_SUCCESS, payload: {...res.data, searchName: name, searchServer: server} }))
            .catch(err => dispatch({ type: SEARCH_FAILURE, payload: err }));
}

export const changePage = 
    (direction, name, server, page) => 
        dispatch => {
            dispatch({ type: SEARCH_FETCH });
            const newPage = direction === 'next'
                ?  page + 1
                : page - 1;
            axios.get('https://xivapi.com/character/search?'
                    + `name=${name}`
                    + `&server=${server}`
                    + `&key=437aa052c2664777a4d2a1bd`
                    + `&page=${newPage}`
                    + '&snake_case=1')
                    .then(res => dispatch({ type: SEARCH_SUCCESS, payload: {...res.data, searchName: name, searchServer: server} }))
                    .catch(err => dispatch({ type: SEARCH_FAILURE, payload: err }));
        }