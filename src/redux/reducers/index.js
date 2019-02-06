import {
  FETCH_ON_LOAD,
  FETCH_ON_LOAD_ERROR,
  SEARCH_FETCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  CHARACTER_FETCH,
  CHARACTER_FETCH_SUCCESS,
  CHARACTER_FETCH_FAILURE,
  VERIFY_START,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  VERIFY_ERROR
} from "../actions";

const initialState = {
  searchResults: [],
  searchName: "",
  searchServer: "",
  searchPage: "1",
  searchMax: "",
  loading: false,
  loginActive: false,
  character: {},
  parses: [],
  parseAverage: "",
  error: null,
  gear: [],
  attributes: [],
  verifiedCharacterId: null,
  savedCharacter: null
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ON_LOAD:
      const savedCharacter = action.payload.character;
      return {
        ...state,
        error: null,
        savedCharacter,
        attributes: savedCharacter.gear_set.attributes
      };
    case FETCH_ON_LOAD_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SEARCH_FETCH:
      return {
        ...state,
        loading: true
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
        error: null
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case CHARACTER_FETCH:
      return {
        ...state,
        searchResults: [],
        searchName: "",
        searchServer: "",
        searchPage: "1",
        searchMax: "",
        loading: true
      };
    case CHARACTER_FETCH_SUCCESS:
      const character = action.payload.character;
      return {
        ...state,
        loading: false,
        error: null,
        character,
        gear: Object.values(character.gear_set.gear),
        attributes: character.gear_set.attributes
      };
    case CHARACTER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case VERIFY_START:
      return {
        ...state,
        loading: true
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        verifiedCharacterId: action.payload,
        error: null
      };
    case VERIFY_FAILURE:
      return {
        ...state,
        loading: false,
        error:
          "Verification unsuccessful - provided number not found on Lodestone profile.  Please add number to Lodestone character profile and try again."
      };
    case VERIFY_ERROR:
      return {
        ...state,
        loading: false,
        error: "Unable to verify character due to error.  Please try again."
      };
    default:
      return state;
  }
};
