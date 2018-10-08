import {
  FETCH_ALL_COUNTRIES_BEGIN,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_COUNTRY_DATA_BEGIN,
  FETCH_COUNTRY_DATA_SUCCESS,
} from '../actions/ApiCallsCountry';

const populationInitialState = {
  countryList: [],
  countryListLoading: false,
  searchedCountry: [],
  searchedCountryLoading: false,
};

export default (state = populationInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES_BEGIN:
      return {
        ...state,
        countryListLoading: true,
      };
    case FETCH_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        countryListLoading: false,
        countryList: action.payload.data,
      };
    case FETCH_COUNTRY_DATA_BEGIN:
      return {
        ...state,
        searchedCountryLoading: true,
      };
    case FETCH_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        searchedCountryLoading: false,
        searchedCountry: action.payload.data,
      };
    default:
      return state;
  }
};
