import axios from "axios";

export const FETCH_ON_LOAD = "FETCH_ON_LOAD";
export const FETCH_ON_LOAD_ERROR = "FETCH_ON_LOAD_ERROR";
export const SEARCH_FETCH = "SEARCH_FETCH";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const CHARACTER_FETCH = "CHARACTER_FETCH";
export const CHARACTER_FETCH_SUCCESS = "CHARACTER_FETCH_SUCCESS";
export const CHARACTER_FETCH_FAILURE = "CHARACTER_FETCH_FAILURE";
export const CHARACTER_FETCH_RETRY = "CHARACTER_FETCH_RETRY";
export const VERIFY_START = "VERIFY_START";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS"; // String found in profile
export const VERIFY_FAILURE = "VERIFY_FAILURE"; // String not found in profile
export const VERIFY_ERROR = "VERIFY_ERROR"; // Error on API call

export const loadSavedCharacter = () => dispatch => {
  const id = JSON.parse(localStorage.getItem("ffxiv-lookup-saved-character"));
  if (!id) return;
  axios
    .get(
      `https://xivapi.com/character/${id}` +
        `?key=437aa052c2664777a4d2a1bd` +
        "&extended=1" +
        "&snake_case=1"
    )
    .then(res => dispatch({ type: FETCH_ON_LOAD, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_ON_LOAD_ERROR, payload: err }));
};

export const searchFetch = (nameInput, serverInput) => dispatch => {
  dispatch({ type: SEARCH_FETCH });
  const name = nameInput
    .replace(/\s/, "+")
    .trim()
    .toLowerCase();
  const server = serverInput.trim();
  axios
    .get(
      "https://xivapi.com/character/search?" +
        `name=${name}` +
        `&server=${server}` +
        `&key=437aa052c2664777a4d2a1bd` +
        "&page=1" +
        "&snake_case=1"
    )
    .then(res =>
      dispatch({
        type: SEARCH_SUCCESS,
        payload: { ...res.data, searchName: name, searchServer: server }
      })
    )
    .catch(err => dispatch({ type: SEARCH_FAILURE, payload: err }));
};

export const changePage = (direction, name, server, page) => dispatch => {
  dispatch({ type: SEARCH_FETCH });
  const newPage = direction === "next" ? page + 1 : page - 1;
  axios
    .get(
      "https://xivapi.com/character/search?" +
        `name=${name}` +
        `&server=${server}` +
        `&key=437aa052c2664777a4d2a1bd` +
        `&page=${newPage}` +
        "&snake_case=1"
    )
    .then(res =>
      dispatch({
        type: SEARCH_SUCCESS,
        payload: { ...res.data, searchName: name, searchServer: server }
      })
    )
    .catch(err => dispatch({ type: SEARCH_FAILURE, payload: err }));
};

export const characterFetch = id => dispatch => {
  dispatch({ type: CHARACTER_FETCH });
  const max = 3; // Attempt only three times before dispatching failure action.
  let request = Promise.reject();
  const rejectDelay = reason => {
    return new Promise((resolve, reject) => {
      setTimeout(reject.bind(null, reason), 5000); // Retry every 5 seconds, max-age cache-control on API set to 5.
    });
  };
  for (let i = 0; i < max; i++) {
    // Attempting promise retry so user will not need to reload.
    request = request
      .catch(() => {
        return axios.get(
          `https://xivapi.com/character/${id}` +
            `?key=437aa052c2664777a4d2a1bd` +
            "&extended=1" +
            "&snake_case=1"
        );
      })
      .then(res => {
        if (res.data.info.character.state === 1) {
          return Promise.reject();
        } else return Promise.resolve(res);
      })
      .catch(rejectDelay);
  }
  request
    .then(res => dispatch({ type: CHARACTER_FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: CHARACTER_FETCH_FAILURE, payload: err }));
};

export const handleVerification = (id, string) => dispatch => {
  dispatch({ type: VERIFY_START });
  axios
    .get(
      `https://xivapi.com/character/${id}/verification` +
        `?token=${string}` +
        "&key=437aa052c2664777a4d2a1bd" +
        "&snake_case=1"
    )
    .then(res => {
      if (res.data.pass) dispatch({ type: VERIFY_SUCCESS, payload: id });
      else dispatch({ type: VERIFY_FAILURE });
    })
    .catch(err => dispatch({ type: VERIFY_ERROR, payload: err }));
};
