import {
  FETCH_ALL_COUNTRIES_BEGIN,
  FETCH_ALL_COUNTRIES_SUCCESS,
} from '../actions/ApiCallsCountry';

const populationInitialState = {
  countryList: [],
  countryListLoading: false,
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
    default:
      return state;
  }
};
